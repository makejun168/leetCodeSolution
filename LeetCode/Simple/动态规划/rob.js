/**
 * @param {number[]} nums
 * @return {number}
 */

// 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，
// 影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

// 自顶向下
// private int[] memo;
// // 主函数
// public int rob(int[] nums) {
//     // 初始化备忘录
//     memo = new int[nums.length];
//     Arrays.fill(memo, -1);
//     // 强盗从第 0 间房子开始抢劫
//     return dp(nums, 0);
// }

// // 返回 dp[start..] 能抢到的最大值
// private int dp(int[] nums, int start) {
//     if (start >= nums.length) {
//         return 0;
//     }
//     // 避免重复计算
//     if (memo[start] != -1) return memo[start];

//     int res = Math.max(dp(nums, start + 1),
//                     nums[start] + dp(nums, start + 2));
//     // 记入备忘录
//     memo[start] = res;
//     return res;
// }

var rob = function (nums) {
  if (!nums.length) return 0;
  // 状态 1 每个房间的价值
  // 状态 2 不能偷相邻的房间 选择 打劫下一家 或者打劫 下下家
  let size = nums.length;
  // base case
  let dp = new Array(size + 2).fill(0);

  for (let i = size - 1; i >= 0; i--) {
    dp[i] = Math.max(dp[i + 1], nums[i] + dp[i + 2]);
  }

  console.log(dp);
  return dp[0];
};

// 空间优化
var rob = function (nums) {
  let n = nums.length;
  // 记录 dp[i+1] 和 dp[i+2]
  let dp_i_1 = 0,
    dp_i_2 = 0;
  // 记录 dp[i]
  let dp_i = 0;
  for (let i = n - 1; i >= 0; i--) {
    dp_i = Math.max(dp_i_1, nums[i] + dp_i_2);
    dp_i_2 = dp_i_1;
    dp_i_1 = dp_i;
  }
  return dp_i;
};

// rob([1, 2, 3, 1]);
// rob([2, 7, 9, 3, 1]);
// rob([2, 1, 1, 2]);
// rob([1]);
rob([1, 1, 1]);
