/*
extracting 2-d coordinates from an array

an array of 

install mocha:
$ sudo npm install -g mocha

running the example: 
$ mocha producing-coordinates.js 
*/

const assert = require('assert');

function getMatchingIndex(array, targetValue) {
	const index = array.findIndex((d) => d === targetValue);
	return index;
}

function getCoordinates(array, value) {
	let x = 0;
	let y = 0;
	for (let i = 0; i < array.length; i++) {
		console.log(array[i]);
		let index = getMatchingIndex(array[i], value);
		if (index !== -1) {
			y = i + 1;
			x = index + 1;
		}
	}
	return `(${x},${y})`;
}

describe(`use getMatchingIndex to find the exact match`, () => {
	const testArray = [12, 5, 8, 130, 44];
	it('8 should be index 2', () => {
		assert.equal(getMatchingIndex(testArray, 8), 2)
	});
});

describe('test if 2d coordinates are given for a given array', () => {

	let testArray = [];
	let testArray2D = [];

	before(() => {
		for (let i = 0; i < 9; i++) {
			testArray[i] = i;
		}
		testArray2D = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8]
		];
	})

	// it(`prints the array:`, () => {
	// 	console.log(testArray);
	// 	console.log(testArray2D);
	// 	assert(1 === 1);
	// })

	it('get coordinates for 4, should be 2,2', () => {
		assert.equal(getCoordinates(testArray2D, 4), '(2,2)');
	})

	it('get coordinates for 0, should be 1,1', () => {
		assert.equal(getCoordinates(testArray2D, 0), '(1,1)');
	})

	it('get coordinates for 7, should be 2,3', () => {
		assert.equal(getCoordinates(testArray2D, 7), '(2,3)');
	})

	it('get coordinates for 5, should be 3,2', () => {
		assert.equal(getCoordinates(testArray2D, 5), '(3,2)');
	})

	it('get coordinates for 8, should be 3,3', () => {
		assert.equal(getCoordinates(testArray2D, 8), '(3,3)');
	})

	it('get coordinates for 9, should be 0,0', () => {
		assert.equal(getCoordinates(testArray2D, 9), '(0,0)');
	})
});