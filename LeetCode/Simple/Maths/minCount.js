/**
 * @param {number[]} coins
 * @return {number}
 */
var minCount = function(coins) {
  let totalCount = 0;
  for (let i = 0; i < coins.length; i++) {
    totalCount += (Math.floor(coins[i] / 2) + coins[i] % 2)
  }
  return totalCount;
};
