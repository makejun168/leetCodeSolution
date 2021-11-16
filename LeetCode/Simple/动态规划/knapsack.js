// 给你一个可装载重量为
// W的背包 和 N个物品，每个物品有重量和价值两个属性。
// 其中第i个物品的重量为wt[i]，价值为 val[i]，现在让你用这个背包装物品，最多能装的价值是多少

// 框加
// 背包问题的base case
// int dp[N+1][W+1]
// dp[0][..] = 0
// dp[..][0] = 0

// for i in [1..N]:
//     for w in [1..W]:
//         dp[i][w] = max(
//             把物品 i 装进背包,
//             不把物品 i 装进背包
//         )
// return dp[N][W]

// W 是背包容量 N 物品数量 wt 物品重量 val 物品的价值
var knapsack = function (W, N, wt, val) {
  let dp = [];
  // 定义base case
  for (let i = 0; i <= N; i++) {
    dp[i] = [];
    for (let j = 0; j <= W; j++) {
      if (i === 0) {
        dp[i][j] = 0;
      }
      if (j === 0) {
        dp[i][j] = 0;
      }
    }
  }
  for (let i = 1; i <= N; i++) {
    for (let w = 1; w <= W; w++) {
      // 不装入 没容量
      if (w - wt[i - 1] < 0) {
        dp[i][w] = dp[i - 1][w];
      } else {
        // 装入
        dp[i][w] = Math.max(
          dp[i - 1][w - wt[i - 1]] + val[i - 1],
          dp[i - 1][w]
        );
      }
    }
  }
  console.log(dp);
  return dp[N][W];
};

// N = 3, W = 4
// wt = [2, 1, 3]
// val = [4, 2, 3]

knapsack(4, 3, [2, 1, 3], [4, 2, 3]);
