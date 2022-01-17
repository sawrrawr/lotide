const eqArrays = function(array1, array2) {
  //make sure arrays are the same length
  if (array1.length !== array2.length) {
    return false;
  } else {
  // compares the indexes of each array, one by one
    for (let i = 0; i < array1.length; i++) {
      // if arrays do not match, return false
      if (array1[i] !== array2[i]) {
       return false;
      }
    }
 }
 return true;
};

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

