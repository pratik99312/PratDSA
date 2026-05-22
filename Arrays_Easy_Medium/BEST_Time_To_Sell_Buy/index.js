/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - min > maxProfit) {
      maxProfit = prices[i] - min;
    }
    if (prices[i] < min) {
      min = prices[i];
    }
  }

  return maxProfit;
};

const prices = [7, 1, 5, 3, 6, 4];

const result = maxProfit(prices);

console.log("Maximum Profit:", result);

// dry run
// min = 7, maxProfit = 0
// i = 1, prices[i] = 1, min = 1, maxProfit = 0
// i = 2, prices[i] = 5, min = 1, maxProfit = 4
// i = 3, prices[i] = 3, min = 1, maxProfit = 4
// i = 4, prices[i] = 6, min = 1, maxProfit = 5
// i = 5, prices[i] = 4, min = 1, maxProfit = 5

// so the final result will be Maximum Profit: 5  
