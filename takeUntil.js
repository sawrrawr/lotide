const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = (array, callback) => {
  let newArray =[];
  for (x of array) {
    if (callback(x)) {
      break;
    }
  newArray.push(x)
  }
 return newArray;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const results1 = takeUntil(data1, x => x < 0);
const results2 = takeUntil(data2, x => x === ',');

console.log(results1);
console.log(results2);

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood']);

module.exports = takeUntil;

