const middle = require('../middle');
const assert = require('chai').assert;

describe("middle", () => {
  it("returns 'cat' for the array ['dog', 'cat', 'bunny']", () => {
    assert.deepEqual(middle(['dog', 'cat', 'bunny']), ['cat']);
  });
  it("return '5' for ['5']", () => {
    assert.deepEqual(middle(['5']), []);
  });
  it("returns an empty array if the array length is 2 or less", () => {
    assert.deepEqual(middle([1]), []);
  });
});



// console.log(middle([1, 2, 3]));
// console.log(assertArraysEqual(middle([1, 2, 3]), [3]));
// console.log(assertArraysEqual(middle(['dog', 'cat', 'bunny']), ['cat']));