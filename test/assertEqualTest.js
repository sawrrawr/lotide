const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("assertEqual", () => {
  it("returns positive assertion message if values match", () => {
    assert.strictEqual(assertEqual(1, 1));
  });
  it("returns negative assertion message if values do not match", () => {
    assert.strictEqual(assertEqual(['5'], '5'))
  });
});

