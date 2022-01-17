const assertEqual = require('./assertEqual');

const findKeyByValue = function(object, value) {
  const listOfKeys = Object.keys(object);
  // console.log('the list of keys stored in var :' + listOfKeys);
  for (key of listOfKeys) {
    if (object[key] === value) {
      return key;
    }
  }
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;