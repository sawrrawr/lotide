const assertEqual = require('./assertEqual');

const countLetters = function(word) {
  const results = {};
  for (const letter of word) {
    if (letter === ' ') { 
      continue; 
    }
    if (!results[letter]) {
      results[letter] = 1;
    } else {
      results[letter] += 1;
    }
  }
  console.log(results);
};

module.exports = countLetters;
