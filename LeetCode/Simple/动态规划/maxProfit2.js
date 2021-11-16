/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let size = prices.length;
  let dp_0 = 0;
  let dp_1 = -Infinity;
  // let dp_pre_0 = 0; // 代表 dp[i-2][0]
  for (let i = 0; i < size; i++) {
    let tmp = dp_0;
    dp_0 = Math.max(dp_0, dp_1 + prices[i]);
    dp_1 = Math.max(dp_1, tmp - prices[i]);
  }
  return dp_0;
};

maxProfit([7, 1, 5, 3, 6, 4]);
