const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') { 
      continue; 
    }
    if (!results[sentence[i]]) {
      results[sentence[i]] = [i]
    } else if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    }
  }
  return results;
};

console.log(letterPositions('hello there'));

module.exports = letterPositions;

