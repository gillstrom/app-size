#!/usr/bin/env node
'use strict';
var meow = require('meow');
var appSize = require('./');

var cli = meow({
	help: [
		'Examples',
		'	$ app-size Safari',
		'	$ app-size /Applications/Safari.app',
		'	$ app-size com.apple.Safari'
	]
});

if (!cli.input.length) {
	console.error('Application is required');
	process.exit(1);
}

appSize(cli.input[0])
	.then(console.log)
	.catch(function (err) {
		console.error(err.message);
		process.exit(1);
	});
