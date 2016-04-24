'use strict';
const fs = require('fs');
const appPath = require('app-path');
const execa = require('execa');
const pify = require('pify');

const getSize = path => {
	const cmd = 'mdls';
	const args = [
		'-name',
		'kMDItemFSSize',
		'-raw',
		path
	];

	return execa(cmd, args).then(res => parseInt(res.stdout, 10));
};

module.exports = app => {
	if (process.platform !== 'darwin') {
		return Promise.reject(new Error('Only OS X is supported'));
	}

	if (typeof app !== 'string') {
		return Promise.reject(new Error('Application is required'));
	}

	return pify(fs.stat)(app)
		.then(stats => {
			if (!stats.isDirectory()) {
				return Promise.reject(new Error('Expected an application'));
			}

			return getSize(app);
		})
		.catch(err => {
			if (err && err.code === 'ENOENT') {
				return appPath(app).then(getSize);
			}

			return Promise.reject(err);
		});
};
