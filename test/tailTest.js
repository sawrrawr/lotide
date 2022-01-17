const tail = require('../tail');
const assert = require('chai').assert;

describe("tail", () => {
  it("returns ['cat', 'bunny'] for the array ['dog', 'cat', 'bunny']", () => {
    assert.deepEqual(tail(['dog', 'cat', 'bunny']), ['cat', 'bunny']);
  });
});
