/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  if (!prices.length) return 0;
  let size = prices.length;
  let dp_0 = 0;
  let dp_1 = -Infinity;
  for (let i = 0; i < size; i++) {
    let tmp = dp_0;
    dp_0 = Math.max(dp_0, dp_1 + prices[i]);
    dp_1 = Math.max(dp_1, tmp - prices[i] - fee);
  }
  return dp_0;
};
