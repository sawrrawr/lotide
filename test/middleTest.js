const middleOfArray = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');


console.log(middleOfArray([1, 2, 3]));
console.log(assertArraysEqual(middleOfArray([1, 2, 3]), [3]));
console.log(assertArraysEqual(middleOfArray(['dog', 'cat', 'bunny']), ['cat']));