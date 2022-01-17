const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

//create a function which takes an array that has nested arrays and returns one array
const flatten = function(array) {
  newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (x = 0; x < array[i].length; x++) {
        newArray.push(array[i][x]);
      };
    } else {
      newArray.push(array[i]);
    }
  }
 console.log(newArray);
};
flatten([1, 2, 3, [1, 2], 4]);

module.exports = flatten;