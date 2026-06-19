// Write a program Jewels and Stone

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jewels.includes(stones[i])) {
      count++;
    }
  }
  return count;
};

// const jewels = "aA"

// const stones = "aAAbbbb"

const jewels = "z";
const stones = "ZZ";

console.log(numJewelsInStones(jewels, stones));
