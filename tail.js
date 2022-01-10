const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❤️ ❤️ ❤️ Assertion Failed: ${actual} !== ${expected}`);
  }
};
let tailArray = [];
const tail = function(array) {
  for (let i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }
  return tailArray;
};
const words = ['one', 'two', 'three'];
console.log(tail(words));
assertEqual();