const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❤️ ❤️ ❤️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//function that takes in two arrays
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
/*
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
*/
// test code
// console.log(eqArrays(['one', 'two'], ['one', 'two']));

assertEqual(eqArrays([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]), true); //PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4, 5]), false); //PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4, 5]), true); //FAIL
assertEqual(eqArrays(['one', 'two', 'three'], ['one', 'two', 'three']), true); //PASS
assertEqual(eqArrays(['one', 2, 'three'], ['one', 2, 'three']), true); //PASS
assertEqual(eqArrays(['one', 2, 'three'], ['one', 2, 'three']), false); //FAIL