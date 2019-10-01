/*

install mocha:
$ sudo npm install -g mocha

running the example:
$ mocha split-in-fours.js

This problem tries to calculate the values of i to the power of x,
basing it on the fact that the values repeat as follows:
i^1 = i
i^2 = -1
i^3 = -i
i^4 = 1
i^5 = i (like i^1)
i^6 = -1 (like i^2)
i^7 = -i (like i^3)
i^8 = 1 (like i^4)
i^9 = i
i^10 = -1 (like i^2)
i^11 = -i
*/

const assert = require('assert');

const values = ['i', '-1', '-i', '1']

    const calculate =
        (value) => {
          let result = value
          if (value < 5) {
            return value
          }
          return result % 4 === 0 ? 4 : result % 4
        }

const translate =
    (value) => {
      return values[value - 1]
    }

describe(
    'Testing the translate function',
    () => {it('0 should return i', () => {assert.equal(translate(1), 'i')})})

describe('Testing the calculate function', () => {
  it('5 should return 1', () => {
    assert.equal(calculate(5), 1);
  });
  it('6 should return 2', () => {
    assert.equal(calculate(6), 2);
  });
  it('7 should return 3', () => {
    assert.equal(calculate(7), 3);
  });
  it('8 should return 4', () => {
    assert.equal(calculate(8), 4);
  });
  it('9 should return 1', () => {
    assert.equal(calculate(9), 1);
  });
  it('10 should return 2', () => {
    assert.equal(calculate(10), 2);
  });
  it('11 should return 3', () => {
    assert.equal(calculate(11), 3);
  });
});

describe('Testing the power of imagination', () => {
  it('i^1 should return i', () => {
    assert.equal(translate(calculate(1)), 'i');
  });
  it('i^4 should return 1', () => {
    assert.equal(translate(calculate(4)), '1');
  });
  it('i^5 should return i', () => {
    assert.equal(translate(calculate(5)), 'i');
  });
});