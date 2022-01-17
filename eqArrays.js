const assertEqual = require('./assertEqual');

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


// test code
// console.log(eqArrays(['one', 'two'], ['one', 'two']));
// console.log(eqArrays([1, 2], [12]));



module.exports = eqArrays;