const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
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

module.exports = map;