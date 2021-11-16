// 给定不同面额的硬币和一个总金额。写出函数来计算可以凑成总金额的硬币组合数。假设每一种面额的硬币有无限个。

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */

// amount = 5, coins = [1, 2, 5]

var change = function (amount, coins) {
  let size = coins.length; // 状态1
  // amount 状态2
  let dp = [];
  // base case
  for (let i = 0; i <= size; i++) {
    dp[i] = [];
    for (let j = 0; j <= amount; j++) {
      if (i === 0) {
        dp[i][j] = 0;
      }
      if (j === 0) {
        dp[i][j] = 1;
      }
    }
  }

  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= amount; j++) {
      // 有空间 可以存进去
      if (j - coins[i - 1] >= 0) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i - 1]];
      } else {
        // 没有空间
        dp[i][j] = dp[i - 1][j]; // 继承上一个的状态
      }
    }
  }

  // console.log(dp);
  return dp[size][amount];
};

var change = function (amount, coins) {
  let n = coins.length;
  let dp = [];
  dp[0] = 1; // base case
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= amount; j++) {
      if (j - coins[i - 1] >= 0) {
        dp[j] = dp[j] + dp[j - coins[i - 1]];
      } else {
        // 没有空间
        dp[j] = dp[j - 1];
      }
    }
  }
  return dp[amount];
};

// 压缩空间
// int change(int amount, int[] coins) {
//   int n = coins.length;
//   int[] dp = new int[amount + 1];
//   dp[0] = 1; // base case
//   for (int i = 0; i < n; i++)
//       for (int j = 1; j <= amount; j++)
//           if (j - coins[i] >= 0)
//               dp[j] = dp[j] + dp[j-coins[i]];

//   return dp[amount];
// }

change(5, [1, 2, 5]);
