/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 明确状态
  // 状态1 每天的股票价钱 状态2 操作次数 状态3 买或者不买
  // 本题只有两个状态 操作次数固定为 k 次
  let size = prices.length;
  let dp = [];
  // 定义 base case 定义三维数组
  for (let i = 0; i < size; i++) {
    dp[i] = [];
    // 状态2 只有 0 和 1
    for (let j = 0; j < 2; j++) {
      dp[i][j] = 0;
    }
  }

  // 开始执行框架 逻辑
  for (let i = 0; i < size; i++) {
    // 设置边界值
    if (i - 1 === -1) {
      dp[i][0] = 0; // max(-1天的股票价值为0， -infinity + 股票价格)
      dp[i][1] = -prices[i]; // max(-infinity， 0 - 股票价格)
      continue;
    }
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]); // 0 代表卖出 上一天的收益
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i]); // 1 代表买入 买入 减去价值
  }
  let result = size - 1;
  return dp[result][0];
};

// 方法二 优化空间
var maxProfit = function (prices) {
  // 明确状态
  // 状态1 每天的股票价钱 状态2 操作次数 状态3 买或者不买
  // 本题只有两个状态 操作次数固定为 k 次
  let size = prices.length;
  let dp_i_0 = 0;
  let dp_i_1 = -Infinity;
  // 开始执行框架 逻辑
  for (let i = 0; i < size; i++) {
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
    dp_i_1 = Math.max(dp_i_1, -prices[i]);
  }
  return dp_i_0;
};


maxProfit([7, 1, 5, 3, 6, 4]);
