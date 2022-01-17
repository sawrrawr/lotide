const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');


console.log(middle([1, 2, 3]));
console.log(assertArraysEqual(middle([1, 2, 3]), [3]));
console.log(assertArraysEqual(middle(['dog', 'cat', 'bunny']), ['cat']));