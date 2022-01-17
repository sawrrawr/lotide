const eqArrays = function(array1, array2) {
  result = ''
  //make sure arrays are the same length
  if (array1.length !== array2.length) {
    result = false;
  } else {
    // compares the indexes of each array, one by one
    for (let i = 0; i < array1.length; i++) {
      // if arrays are identical, return true
      if (array1[i] === array2[i]) {
        result = true;
        // if arrays do not match, return false
      } else if (array1[i] !== array2[i]) {
        result = false;
        break;
      }
  }
 }
 return result;
};

const assertArraysEqual = require('./assertArraysEqual');

const without = function(array1, array2) {
  let newArray = [];
  let match = '';
  for (let i = 0; i < array1.length; i++) {
    for (let x = 0; x < array2.length; x++) {
      if (array1[i] === array2[x]) {
        match = true;
        break;
      } else if (array1[i] !== array2[x]) {
        match = false;
      }
    }
    if (match === false) {
      newArray.push(array1[i]);
    }
  }
  console.log(newArray);
};

const words = ['hello', 'world', 'lighthouse'];
without(words, ['lighthouse']);
assertArraysEqual(words, ['hello', 'world', 'lighthouse']);

module.exports = without;