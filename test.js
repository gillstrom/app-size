'use strict';
var test = require('ava');
var appSize = require('./');

test('path', t => {
	t.plan(1);

	appSize('/Applications/Safari.app').then(size => {
		t.assert(typeof size === 'number');
	}).catch(err => {
		t.assert(!err, err);
	});
});

test('name', t => {
	t.plan(1);

	appSize('Safari').then(size => {
		t.assert(typeof size === 'number');
	}).catch(err => {
		t.assert(!err, err);
	});
});

test('bundle', t => {
	t.plan(1);

	appSize('com.apple.Safari').then(size => {
		t.assert(typeof size === 'number');
	}).catch(err => {
		t.assert(!err, err);
	});
});
