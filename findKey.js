const inspect = require('util').inspect;

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❤️ ❤️ ❤️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (object, callback) => {
  const keys = Object.keys(object);
  // console.log(`const keys: ${keys}`);
  for (const x of keys) {
    // console.log("x.stars", x.stars);
    // console.log("x", x);
    // console.log("object[key]:", inspect(object[x].stars));
    // console.log("callback(key):" + callback(x));
    if (callback(object[x])) {
    return x;
    }
  }
};

const galaxies = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}

const callbackFunc = (x) => x.stars === 2;

console.log(findKey(galaxies, callbackFunc));

const input = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

assertEqual(findKey(input, x => x.stars === 2), "noma");

const input2 = {
  "Blue Hill": { stars: 3 },
  "Akaleri": { stars: 1 },
  "noma": { stars: 3 },
  "elBulli": { stars: 2 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

assertEqual(findKey(input2, x => x.stars === 2), "elBulli");

const input3 = {
  "Blue Hill": { stars: 2 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

assertEqual(findKey(input3,x => x.stars === 2),"Blue Hill");