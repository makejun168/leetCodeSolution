// 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

// 输入: coins = [1, 2, 5], amount = 11
// 输出: 3
// 解释: 11 = 5 + 5 + 1

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// 初始化 base case
// dp[0][0][...] = base
// # 进行状态转移
// for 状态1 in 状态1的所有取值：
//  for 状态2 in 状态2的所有取值：
//    for ...
// dp[状态1][状态2][...] = 求最值(选择1，选择2...)

// 1. 确定 base case 确定目标是什么 amount 为 0
// 2. 确定状态

var coinChange = function (coins, amount) {
  function dp(n) {
    if (n === 0) return 0;
    if (n < 0) return -1;
    // 求最小值
    res = Infinity;
    for (let i = 0; i < coins.length; i++) {
      let subproblem = dp(n - coins[i]);
      if (subproblem === -1) continue;
      res = Math.min(res, 1 + subproblem);
    }
    if (res !== Infinity) {
      return res;
    } else {
      return -1;
    }
  }
  return dp(amount);
};


// 解法2 带备忘录
var coinChange = function (coins, amount) {
  let memo = {};
  function dp(n) {
    if (n in memo) return memo[n];
    if (n === 0) return 0;
    if (n < 0) return -1;
    // 求最小值
    res = Infinity;
    for (let i = 0; i < coins.length; i++) {
      let subproblem = dp(n - coins[i]);
      if (subproblem === -1) continue;
      console.log(subproblem);
      res = Math.min(res, 1 + subproblem);
    }
    // 记录备忘录
    if (res !== Infinity) {
      return res;
    } else {
      return -1;
    }
  }
  return dp(amount);
};

// 解法3
var coinChange = function(coins, amount) {
  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i < amount.length; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i - coins[j] >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }
  return dp[amount] === Infinity ? -1 :dp[amount];
}
