/**
 * @param {number[]} prices
 * @return {number}
 */

// public int maxProfit(int[] prices) {
//   if(prices.length<=1) return 0;
//   int maxK=2, n=prices.length;
//   int [][][] dp=new int[n][maxK+1][2];

//   for(int i=0;i<n;i++){
//     for(int k=maxK;k>=1;k--){
//       if(i==0){
//           dp[i][k][0]=0;
//           dp[i][k][1]=-prices[0];
//           //dp[i][k][0]=Math.max(dp[i-1][k][0],dp[i-1][k][1]+prices[i]);
//           //dp[i][k][1]=Math.max(dp[i-1][k][1],dp[i-1][k-1][0]-prices[i]);
//           continue;
//       }
//       dp[i][k][0]=Math.max(dp[i-1][k][0],dp[i-1][k][1]+prices[i]);
//       dp[i][k][1]=Math.max(dp[i-1][k][1],dp[i-1][k-1][0]-prices[i]);
//     }
//   }
//   return dp[n-1][maxK][0];
// }

var maxProfit = function (prices) {
  if (!prices.length) return 0
  // 明确状态
  // 状态1 每天的股票价钱 状态2 操作次数 状态3 买或者不买
  // 本题只有两个状态 操作次数固定为 k 次
  let size = prices.length;
  let lastIdx = size - 1;
  let maxK = 2;

  // base case
  let dp = Array.from(prices, (item, idx) =>
    Array.from(new Array(maxK + 1), (child, childIdx) => {
      let target = [];
      target[0] = 0;
      target[1] = 0;
      return target;
    })
  );

  // 循环状态
  for (let i = 0; i < size; i++) {
    for (let k = maxK; k >= 1; k--) { // 倒叙开始计算
      if (i === 0) {
        dp[i][k][0] = 0; // 第一天 未有收入
        dp[i][k][1] = -prices[0]; // 第一天就买入的话 是 负收入
        continue;
      }
      dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i]); // Math.max(rest， 卖出的话，旧的状态收入 + 当前的股票价格);
      dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i]);// Math.max(rest， 买入的话，旧的状态收入 - 当前的股票价格);
    }
  }

  return dp[lastIdx][maxK][0];
};

// 方法二
// var maxProfit = function (prices) {
//   //第一次 买入， 卖出的利润
//   let profit_1_in = -prices[0],
//     profit_1_out = 0;
//   //继第一次之后，第二次买入卖出的利润
//   let profit_2_in = -prices[0],
//     profit_2_out = 0;
//   let n = prices.length;
//   for (let i = 1; i < n; i++) {
//     profit_2_out = Math.max(profit_2_out, profit_2_in + prices[i]);
//     //第二次买入后的利润， 第一次卖出的利润 - prices[i]
//     profit_2_in = Math.max(profit_2_in, profit_1_out - prices[i]);
//     profit_1_out = Math.max(profit_1_out, profit_1_in + prices[i]);
//     //第一次买入后，利润为 -prices[i]
//     profit_1_in = Math.max(profit_1_in, -prices[i]);
//   }
//   return profit_2_out;
// };

// maxProfit([2, 1, 2, 0, 1]);
maxProfit([3, 3, 5, 0, 0, 3, 1, 4]);
