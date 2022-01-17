const eqArrays = require('./eqArrays');

const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚 Assertion Passed! Your objects match!`);
  } else {
    console.log(`❤️ ❤️ ❤️ Assertion Failed! Your objects do not match!`);
  }
};
