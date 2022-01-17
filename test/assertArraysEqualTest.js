const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

describe("assertArraysEqual", () => {
  it("returns positive assertion when arrays match", () => {
    assert.strictEqual(assertArraysEqual([1, 2], [1, 2]));
  });
  it("returns negative assertion when arrays do not match", () => {
    assert.strictEqual(assertArraysEqual(['one'], [1]));
  });
});
