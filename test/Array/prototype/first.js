'use strict';

exports.__generic = function (t, a) {
	a(t.call(this), this[0]);
};