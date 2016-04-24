import test from 'ava';
import m from './';

test('path', async t => {
	t.is(typeof (await m('/Applications/Safari.app')), 'number');
});

test('name', async t => {
	t.is(typeof (await m('Safari')), 'number');
});

test('bundle', async t => {
	t.is(typeof (await m('com.apple.Safari')), 'number');
});
