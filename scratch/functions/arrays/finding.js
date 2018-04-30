/*
sandpit for array practice

install mocha:
$ sudo npm install -g mocha

running the example: 
$ mocha finding.js
*/

const assert = require('assert');

function isBigEnough(edge, testTarget) {
	return testTarget >= edge;
}

function isBiggerOrEqualThan15(element) {
	return element >= 15;
}

function getIndexThatIsBigEnough(array, edge) {
	const index = array.findIndex((testTarget) => isBigEnough(edge, testTarget));
	return index;
}

function getMatchingIndex(array, targetValue) {
	const index = array.findIndex((d) => d === targetValue);
	return index;
}

describe('isBiggerOrEqualThan15', () => {
	it('check is bigger or equal than 15', () => {
		assert(isBiggerOrEqualThan15(15));
	});

	it('check 13 is smaller than 15', () => {
		assert(!isBiggerOrEqualThan15(13));
	});

	it('check 16 is bigger than 15', () => {
		assert(isBiggerOrEqualThan15(16));
	});

});

describe('isBigEnough', () => {
	it('check 16 isBigEnough to 13', () => {
		assert(isBigEnough(13, 16));
	});

	it('check 13 !isBigEnough to 16', () => {
		assert(!isBigEnough(16, 13));
	});
});

const testArray = [12, 5, 8, 130, 44];
describe(`getIndexThatIsBigEnough, test array: ${testArray}`, () => {

	it('check that for 13 index is 3', () => {
		assert(getIndexThatIsBigEnough(testArray, 13) === 3);
	});

	it('check that for 131 index is -1', () => {
		assert(getIndexThatIsBigEnough(testArray, 131) === -1);
	});

	it('check that for 5 index is 0', () => {
		assert(getIndexThatIsBigEnough(testArray, 5) === 0);
	});
});

describe(`repeat getIndexThatIsBigEnough but with arrow inline functions, test array: ${testArray}`, () => {

	it('check that for 13 index is 3', () => {
		assert(testArray.findIndex((d) => d >= 13) === 3);
	});

	it('check that for 131 index is -1', () => {
		assert(testArray.findIndex((d) => d >= 131) === -1);
	});

	it('check that for 5 index is 0', () => {
		assert(testArray.findIndex((d) => d >= 5) === 0);
	});
});

describe(`use findIndex to find the exact match, test array: ${testArray}`, () => {
	it('8 should be index 2', () => {
		assert(testArray.findIndex(d => d === 8) === 2)
	});
});

describe(`use getMatchingIndex to find the exact match, test array: ${testArray}`, () => {
	it('8 should be index 2', () => {
		assert.equal(getMatchingIndex(testArray, 8), 2)
	});
});