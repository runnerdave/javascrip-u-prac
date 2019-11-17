/*

install mocha:
$ sudo npm install -g mocha

running the example:
$ mocha prime-decomposition.js

The client will send one number (120) and the server will respond with a stream
of (2,2,2,3,5), because 120=2*2*2*3*5

Algorithm (pseudo code):

k = 2
N = 210
while N > 1:
    if N % k == 0:   // if k evenly divides into N
        print k      // this is a factor
        N = N / k    // divide N by k so that we have the rest of the number
                     // left
    else: k = k + 1
*/

const assert = require('assert');

const decompose =
    (value) => {
      k = 2
      while (value > 1) {
        if (value % k == 0) {
          console.log(value)
          value = value / k
        } else {
          k += 1
        }
      }
      return decompose(value)
    }

describe(
    'Testing the decompose function',
    () => {it('6 should return blah', () => {assert.equal(decompose(6), 2)})})