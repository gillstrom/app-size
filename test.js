import test from 'ava';
import appSize from './';

test('path', t => {
	t.plan(1);

	appSize('/Applications/Safari.app')
		.then(size => {
			t.is(typeof size, 'number');
		})
		.catch(err => {
			t.assert(!err, err);
		});
});

test('name', t => {
	t.plan(1);

	appSize('Safari')
		.then(size => {
			t.is(typeof size, 'number');
		})
		.catch(err => {
			t.assert(!err, err);
		});
});

test('bundle', t => {
	t.plan(1);

	appSize('com.apple.Safari')
		.then(size => {
			t.is(typeof size, 'number');
		})
		.catch(err => {
			t.assert(!err, err);
		});
});

test('bundle', t => {
	t.plan(1);

	appSize('com.apple.bundle.that.doesnt.exist').catch(err => {
		t.assert(err, err);
	});
});
