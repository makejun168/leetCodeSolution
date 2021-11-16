/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 0) return 0;
  let dp = new Array(n + 1).fill(null);
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    // for (let step of stepList) {
    //   if (n - i >= 0) {
    //     dp[i] += dp[i - step];
    //   }
    // }
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  console.log(dp);
  return dp[n];
};

climbStairs(3);

