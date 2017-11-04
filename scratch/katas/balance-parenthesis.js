/*
sandpit for array reduce practice

install mocha:
$ sudo npm install -g mocha

running the example: 
$ mocha balance-parenthesis.js
*/

const assert = require('assert');

const balanceParens = (string) => {
	return string.split("").reduce((previous, char) => {
		if (previous < 0) { return previous; }
		switch (char) { 
			case "(":
				return ++previous;
			case ")":
				return --previous;
		}
	}, 0);
}

describe('Testing the balancing of parenthesis', () => {
	const balancedString_1 = "((()))";
	it('should return 0', () => {
		assert.equal(0, balanceParens(balancedString_1));
	});

	const imbalancedString_1 = "((())";
	it('should return 1', () => {
		assert.equal(1, balanceParens(imbalancedString_1));
	});

	const imbalancedString_2 = "())";
	it('should return -1', () => {
		assert.equal(-1, balanceParens(imbalancedString_2));
	});

	const imbalancedString_3 = ")(";
	it('should return -1', () => {
		assert.equal(-1, balanceParens(imbalancedString_3));
	});

	const imbalancedString_4 = ")))";
	it('should return -1', () => {
		assert.equal(-1, balanceParens(imbalancedString_4));
	});
});