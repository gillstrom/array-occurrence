'use strict';
var test = require('ava');
var arrayOccurrence = require('./');

test(function (t) {
	t.is(arrayOccurrence([], 1), 0);
	t.is(arrayOccurrence([1, 2, 3, 4, 5, 3], 3), 2);
	t.is(arrayOccurrence(['a', 'a', 'b', 'c', 'a', 'b'], 'a'), 3);
	t.is(arrayOccurrence(['a', 'a', 'b', 'c', 'a', 'b'], 'd'), 0);
	t.end();
});
