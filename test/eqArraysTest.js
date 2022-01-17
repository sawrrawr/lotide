const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

assertEqual(eqArrays([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]), true); //PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4, 5]), false); //PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4, 5]), true); //FAIL
assertEqual(eqArrays(['one', 'two', 'three'], ['one', 'two', 'three']), true); //PASS
assertEqual(eqArrays(['one', 2, 'three'], ['one', 2, 'three']), true); //PASS
assertEqual(eqArrays(['one', 2, 'three'], ['one', 2, 'three']), false); //FAIL