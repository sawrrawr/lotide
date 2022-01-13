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

const assertArraysEqual = function(array1, array2) {
  eqArrays(array1, array2)
  if (true) {
    console.log(`💚💚💚 Assertion Passed! Your arrays match!`);
  } 
  console.log(`❤️ ❤️ ❤️ Assertion Failed! Your arrays do not match!`);
};
assertArraysEqual([1, 2], [1, 2]);