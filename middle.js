
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

//create a function that returns the middle values in an array
// the returned array can be 1 or 2 elements long depending on origin array
// if the origin array has one or two elements, return an empty array
const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    let sum = 0;
    let oneUp = '';
    let oneDown = '';
    let answerArray = [];
    for (let i = 0; i < array.length; i++) {
      sum += i;
    }
    sum = sum / array.length;
    oneUp = Math.ceil(sum)
    oneDown = Math.floor(sum)
    answerArray.push(array[oneDown], array[oneUp])
    return answerArray;
  } else if (array.length % 2 !== 0) {
    let sum = 0;
    let answerArray = [];
    for (let i = 0; i < array.length; i++) {
      sum += i;
    }
    sum = sum / array.length;
    answerArray.push(array[sum]);
    return answerArray;
  }
};

// console.log(middle([1, 2, 3]));
// console.log(middle([1, 2, 3]), [3]);
// console.log(middle(['dog', 'cat', 'bunny']), ['cat']);
// console.log(eqArrays(middle(['dog', 'cat', 'bunny']), ['cat']));
// console.log(assertArraysEqual(middle(['dog', 'cat', 'bunny']), ['cat']));

module.exports = middle;
