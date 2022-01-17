const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("eqArrays", () => {
  it("returns true if arrays are equal", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false if arrays are not equal", () => {
    assert.strictEqual(eqArrays(['cat'], ['bunny']), false);
  });
});

