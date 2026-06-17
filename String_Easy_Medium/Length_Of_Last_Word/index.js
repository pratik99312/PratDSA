// Write a Program to find the length of the last word

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  s = s.trim();
  s = s.split(" ");
  console.log(s)
  return s[s.length - 1].length;
};

let s = "luffy is still joyboy";

console.log(lengthOfLastWord(s));
