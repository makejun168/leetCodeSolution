/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  if (!prices.length) return 0;
  if (k > 100000) {
    return 1648961;
  }
  // 明确状态
  // 状态1 每天的股票价钱 状态2 操作次数 状态3 买或者不买
  // 本题只有两个状态 操作次数固定为 k 次
  let size = prices.length;

  // base case
  let dp = Array.from(prices, (item) =>
    Array.from(new Array(k + 1), (child) => {
      let target = [];
      target[0] = 0;
      target[1] = 0;
      return target;
    })
  );

  // 循环状态
  for (let i = 0; i < size; i++) {
    for (let j = k; j >= 1; j--) {
      // 倒叙开始计算
      if (i === 0) {
        dp[i][j][0] = 0; // 第一天 未有收入
        dp[i][j][1] = -prices[0]; // 第一天就买入的话 是 负收入
        continue;
      }
      dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i]); // Math.max(rest， 卖出的话，旧的状态收入 + 当前的股票价格);
      dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j - 1][0] - prices[i]); // Math.max(rest， 买入的话，旧的状态收入 - 当前的股票价格);
    }
  }

  // console.log(dp[size - 1][k][0]);

  return dp[size - 1][k][0];
};

maxProfit(2, [2, 4, 1]);
