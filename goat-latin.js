/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
  const vowels = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
    A: 1,
    E: 1,
    I: 1,
    O: 1,
    U: 1,
  };
  sentence = sentence.split(" ");
  for (let i = 0; i < sentence.length; i++) {
    if (vowels[sentence[i][0]]) {
      sentence[i] = sentence[i] + "ma";
    } else {
      sentence[i] = sentence[i] + sentence[i][0];
      sentence[i] = sentence[i].slice(1);
      sentence[i] = sentence[i] + "ma";
    }
    sentence[i] = appendCharAsPerWordIndex(sentence[i], i + 1)
  }
  return sentence.join(" ");
};

function appendCharAsPerWordIndex(word, index) {
  if (index) {
    word += "a";
    return appendCharAsPerWordIndex(word, index - 1);
  } else {
    return word;
  }
}

console.log(toGoatLatin("I speak Goat Latin"));
console.log(toGoatLatin("The quick brown fox jumped over the lazy dog"));
