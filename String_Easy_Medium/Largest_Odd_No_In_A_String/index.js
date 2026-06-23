// Write a program to find out the Largest )dd Number in a String

/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (s) {
  let n = s.length - 1;
  while (n >= 0) {
    if (Number(s[n]) % 2 == 1) {
      return s.substring(0, n + 1);
    }
    --n;
  }
  return "";
};

// const s = "521006"

// const s = "4206"

const s = "234561";

console.log(largestOddNumber(s));

// T = O(n)
// S = O(1)

// If an odd digit is found:

// Take the substring from index 0 to n.

// Remember:

// substring(start, end)    ----------------> IMPORTANT

// includes start but excludes end.

// So we use:

// n + 1

// to include the digit at index n.
