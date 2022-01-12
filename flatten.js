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