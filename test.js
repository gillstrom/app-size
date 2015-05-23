'use strict';
var test = require('ava');
var appSize = require('./');

test('path', function (t) {
	t.plan(2);

	appSize('/Applications/Safari.app', function (err, size) {
		t.assert(!err, err);
		t.assert(size);
	});
});

test('name', function (t) {
	t.plan(2);

	appSize('Safari', function (err, size) {
		t.assert(!err, err);
		t.assert(size);
	});
});

test('bundle', function (t) {
	t.plan(2);

	appSize('com.apple.Safari', function (err, size) {
		t.assert(!err, err);
		t.assert(size);
	});
});
