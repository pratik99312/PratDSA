// Write a Program to find the words in terms of index containing Character

/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
  let res = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      res.push(i);
    }
  }
  return res;
};

// const  words = ["leet","code"], x = "e";

const words = ["abc", "bcd", "aaaa", "cbc"],
  x = "a";

console.log(findWordsContaining(words, x));
