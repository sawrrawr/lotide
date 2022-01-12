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

//create a function that returns the middle values in an array
// the returned array can be 1 or 2 elements long depending on origin array
// if the origin array has one or two elements, return an empty array
const middleOfArray = function(array) {
  if (array.length <= 2) {
    console.log('ERROR: You need more numbers in your array!');
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

console.log(middleOfArray([1, 2, 3]));
console.log(assertArraysEqual(middleOfArray([1, 2, 3]), [3]));
console.log(assertArraysEqual(middleOfArray(['dog', 'cat', 'bunny']), ['cat']));
