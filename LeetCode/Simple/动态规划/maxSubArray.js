/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (!nums.length) return 0;
  let res = 0;
  let dp = new Array(res.length).fill(0);
  dp[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
  }
  res = Math.max(...dp);
  return res;
};

// 压缩空间状态
// dp[i] 只保留上一个状态 和 最大值
var maxSubArray = function (nums) {
  if (!nums.length) return 0;
  let dp_0 = nums[0];
  let dp_1 = 0,
    res = dp_0; // 保留最大值
  for (let i = 1; i < nums.length; i++) {
    dp_1 = Math.max(nums[i], dp_0 + nums[i]);
    dp_0 = dp_1; // 下次时候需要用到上一个状态
    // 计算最大值
    res = Math.max(res, dp_1);
  }
  return res;
};
