/*
sandpit for array reduce practice

install mocha:
$ sudo npm install -g mocha

running the example: 
$ mocha reduce-array.js
*/

const assert = require('assert');

const numbers = [1, 1, 2, 3, 4, 4];

const expected = [1, 2, 3, 4];

const filterRepeats = (array) => {
	return array.reduce((accumulator, e) => {
		if (!accumulator.find(x => x === e)) {
			accumulator.push(e);
		}		
		return accumulator;
	}, [])
}

describe('leave only unique elements', () => {
	it('expected is equal to actual', () => {
		assert.deepEqual(expected, filterRepeats(numbers));
	});
});