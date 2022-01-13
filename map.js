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
  let result = eqArrays(array1, array2)
  if (result === true) {
    console.log(`💚💚💚 Assertion Passed! Your arrays match!`);
  } else {
    console.log(`❤️ ❤️ ❤️ Assertion Failed! Your arrays do not match!`);
  }
};
const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  const results = []
  for (item of array) {
    results.push(callback(item));
  }
  return results;
};
const resultWords = [ 'g', 'c', 't', 'm', 't' ]
const resultsForWords = map(words, word => word[0]);
const wordsUpperCase = map(words, word => word.toUpperCase());
const upperCaseResults = ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM'];
const numbers = [12.2304987, 1.294857, 4.1347526, 7.4674, 8.5634];
const resultNumbers = ['12.23', '1.29', '4.13', '7.47', '8.56'];
const resultsForNumbers = map(numbers, number => number.toFixed(2));
// console.log(resultsForNumbers);
assertArraysEqual(resultsForWords, resultWords);
assertArraysEqual(resultsForNumbers, resultNumbers);
assertArraysEqual(wordsUpperCase, upperCaseResults);