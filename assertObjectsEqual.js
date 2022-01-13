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

const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  if (object1Keys.length !== object2Keys.length) {
    return false;
  }
  for (key of object1Keys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      };
    }
    else if (object1[key]!== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚 Assertion Passed! Your objects match!`);
  } else {
    console.log(`❤️ ❤️ ❤️ Assertion Failed! Your objects do not match!`);
  }
};

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true
assertObjectsEqual(eqObjects({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }), true);
 
/*
 We quickly realize while looking at the assertion messages that they print out objects as [object Object] which is not very descriptive and will not help with our debugging efforts.

✅✅✅ Assertion Passed: [object Object] === [object Object]
🛑🛑🛑 Assertion Failed: [object Object] !== [object Object]
As a workaround to this problem, we can modify our function to use the util library's inspect function. The very first thing we should do in our function is import the library so that the function can use it.

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  // ...
};
Let's make use of the inspect function. Here is an example use of it to help you apply it in our function:

console.log(`Example label: ${inspect(actual)}`);
With this problem resolved, you should see more detailed object output to the console:

✅✅✅ Assertion Passed: { a: '1', b: 2 } === { b: 2, a: '1' }

*/