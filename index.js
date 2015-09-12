'use strict';
module.exports = function (arr, val) {
	if (!Array.isArray(arr)) {
		throw new TypeError('Expected an array');
	}

	var n = 0;

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === val) {
			n++;
		}
	}

	return n;
};
