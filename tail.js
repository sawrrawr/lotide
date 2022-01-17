const assertEqual = require('./assertEqual');

let tailArray = [];
const tail = function(array) {
  for (let i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }
  return tailArray;
};


module.exports = tail;

