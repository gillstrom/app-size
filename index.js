'use strict';
var execFile = require('child_process').execFile;
var fs = require('fs');
var appPath = require('app-path');

function getSize(path, cb) {
	var cmd = 'mdls';
	var args = [
		'-name',
		'kMDItemFSSize',
		'-raw',
		path
	];

	execFile(cmd, args, function (err, stdout) {
		if (err) {
			cb(err);
			return;
		}

		cb(null, parseInt(stdout));
	});
}

module.exports = function (app, cb) {
	if (process.platform !== 'darwin') {
		throw new Error('Only OS X are supported');
	}

	if (typeof app !== 'string') {
		throw new Error('Application is required');
	}

	fs.stat(app, function (err, stats) {
		if (err && err.code === 'ENOENT') {
			appPath(app, function (err, path) {
				if (err) {
					cb(err);
					return;
				}

				getSize(path, cb);
			});
			return;
		}

		if (err) {
			cb(err);
			return;
		}

		if (!stats.isDirectory()) {
			throw new Error('Expected an application');
		}

		getSize(app, cb);
	});
};
