const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❤️ ❤️ ❤️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//TEST CODE
assertEqual("Bootcamp", "Bootcamp");
assertEqual('cat', 'dog');
assertEqual(4, 4);
assertEqual(4, 64);