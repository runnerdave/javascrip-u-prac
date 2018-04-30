/*

install mocha:
$ sudo npm install -g mocha

running the example: 
$ mocha split-in-fours.js
*/

const assert = require('assert');

const splitMe = (value) => {
    let result = '';
    let array = value.split('');
    for (let i = 1; i <= array.length; i++) {
        result += array[i-1];
        if ((i != array.length) && (i % 4 === 0)) {
            result += ' ';
        }
    }
    return result;
}

const splitMeRegex = (string) => {
    return string.match(/.{1,4}/g).join(' ');
}

describe('Testing the splitting of a string into fours', () => {
	const creditCardLike = '6456459789879788';
	it('should return string of 19', () => {
		assert.equal(19, (splitMe(creditCardLike) + '').length);
    });
    it('should return string split in fours', () => {
		assert.equal('6456 4597 8987 9788', splitMe(creditCardLike));
    });
    it('should return string split in fours', () => {
		assert.equal('6456 4597 8987 9788', splitMeRegex(creditCardLike));
    });
});
