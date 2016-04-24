#!/usr/bin/env node
'use strict';
const meow = require('meow');
const prettyBytes = require('pretty-bytes');
const appSize = require('./');

const cli = meow(`
	Examples
		$ app-size Safari
		$ app-size /Applications/Safari.app
		$ app-size com.apple.Safari
`);

if (!cli.input.length) {
	console.error('Application is required');
	process.exit(1);
}

appSize(cli.input[0]).then(res => console.log(prettyBytes(res)));
