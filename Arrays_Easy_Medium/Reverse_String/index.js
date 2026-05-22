/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let len = s.length;
  let halfLen = Math.floor(len / 2);

  for (let i = 0; i < halfLen; i++) {
    let temp = s[i];
    s[i] = s[len - 1 - i];
    s[len - 1 - i] = temp;
  }

  return s;
};

const result = reverseString(["h", "e", "l", "l", "o"]);
console.log(result);

// dry run
// s = ["h", "e", "l", "l", "o"], len = 5, halfLen = 2
// i = 0, temp = "h", s[0] = "o", s[4] = "h"
// i = 1, temp = "e", s[1] = "l", s[3] = "e"

// so the final result will be ["o", "l", "l", "e", "h"]

// This is the optimized solution with O(1) space complexity and O(n) time complexity.  
