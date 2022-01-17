const assertEqual = require('./assertEqual');

const eqArrays = require('./eqArrays');

// returns 'true' if both objects have identical keys and identical values
// otherwise return 'false'

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

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true
// assertEqual(eqObjects(cd, dc), true);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false
// assertEqual(eqObjects(cd, cd2), false);

module.exports = eqObjects;