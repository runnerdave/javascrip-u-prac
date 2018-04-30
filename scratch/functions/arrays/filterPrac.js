/*
sandpit for array practice

install mocha:
$ sudo npm install -g mocha

running the example: 
$ mocha filterPrac.js
*/

const assert = require('assert');

function filterArray(array, target) {
	return array.filter(x => x !== target);
}

function filterArrayWithArray(array, arrayExclude) {
	return array.filter( function(x) {return !arrayExclude.includes(x)})
}

const testArray = [12, 5, 8, 130, 44];

describe(`filterArray, test array: ${testArray}`, () => {

	it('check that 12 is removed', () => {
		let result = filterArray(testArray, 12);
		assert.deepEqual(result, [5, 8, 130, 44]);
	});

	it('check that 13 is not removed', () => {
		let result = filterArray(testArray, 13);
		assert.deepEqual(result, testArray);
	});
});

const exclusionArray = [130, 44];

describe(`filterArrayWithArray, test array: ${testArray}, to exclude: ${exclusionArray}`, () => {

	it('check that 130 and 44 are removed', () => {
		let result = filterArrayWithArray(testArray, exclusionArray);
		assert.deepEqual(result, [12, 5, 8]);
	});

	it('check that 12 and 5 are removed', () => {
		let result = filterArrayWithArray(testArray, [5, 12]);
		assert.deepEqual(result, [8, 130, 44]);
	});

	it('check that 12 is removed', () => {
		let result = filterArrayWithArray(testArray, [12]);
		assert.deepEqual(result, [5, 8, 130, 44]);
	});
});