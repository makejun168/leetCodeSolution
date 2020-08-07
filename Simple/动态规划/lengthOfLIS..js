// 给定一个无序的整数数组，找到其中最长上升子序列的长度。

// 输入: [10,9,2,5,3,7,101,18]
// 输出: 4
// 解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。

/**
 * @param {number[]} nums
 * @return {number}
 */

// 1. 暴力 求解 2 ^ n
// 2. DP DP[i] 从 0 开始 => i 元素 最长的子序列的长度

// Max(DP[0].... DP[n-1])

function lengthOfLIS(nums) {
  let dp = new Array(nums.length).fill(1); // 默认为1
  for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < i; j ++) {
          if (nums[j] < nums[i]) {
              dp[i] = Math.max(dp[i], dp[j] + 1);
          }
      }
  }
  
  let res = 0;
  for (let i = 0; i < dp.length; i++) {
      res = Math.max(res, dp[i]);
  }
  return res;
}
