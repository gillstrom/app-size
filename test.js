'use strict';
var test = require('ava');
var appSize = require('./');

test('path', function (t) {
	t.plan(1);

	appSize('/Applications/Safari.app').then(function (size) {
		t.assert(typeof size === 'number');
	}).catch(function (err) {
		t.assert(!err, err);
	});
});

test('name', function (t) {
	t.plan(1);

	appSize('Safari').then(function (size) {
		t.assert(typeof size === 'number');
	}).catch(function (err) {
		t.assert(!err, err);
	});
});

test('bundle', function (t) {
	t.plan(1);

	appSize('com.apple.Safari').then(function (size) {
		t.assert(typeof size === 'number');
	}).catch(function (err) {
		t.assert(!err, err);
	});
});
