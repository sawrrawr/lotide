const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  const result = eqArrays(array1, array2);
  if (result === true) {
    console.log(`💚💚💚 Assertion Passed! Your arrays match!`);
  } else if (result === false) {
  console.log(`❤️ ❤️ ❤️ Assertion Failed! Your arrays do not match!`);
  } 
};

// quick test code
// assertArraysEqual([1, 2], [1, 2]);

module.exports = assertArraysEqual;