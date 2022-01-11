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

const assertArraysEqual = function(array1, array2) {
  eqArrays(array1, array2)
  if (result === true) {
    console.log(`💚💚💚 Assertion Passed! Your arrays match!`);
  } else {
    console.log(`❤️ ❤️ ❤️ Assertion Failed! Your arrays do not match!`);
  }
};
assertArraysEqual([1, 2], [1, 2]);