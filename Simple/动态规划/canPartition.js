/**
 * @param {number[]} nums
 * @return {boolean}
 */

// 背包问题
// 1. 给一个可装载重量为 sum / 2 的背包和 N 个物品，每个物品的重量为 nums[i]。现在让你装物品，是否存在一种装法，能够恰好将背包装满

// dp[i][j] = x 表示，对于前 i 个物品，当前背包的容量为 j 时，若 x 为 true，
// 则说明可以恰好将背包装满，若 x 为 false，则说明不能恰好将背包装满。

// 比如说，如果 dp[4][9] = true，其含义为：对于容量为 9 的背包，若只是用前 4 个物品，可以有一种方法把背包恰好装满

// 根据这个定义，我们想求的最终答案就是 dp[N][sum/2]，
// base case 就是 dp[..][0] = true 和 dp[0][..] = false，
// 因为背包没有空间的时候，就相当于装满了，而当没有物品可选择的时候，肯定没办法装满背包。

var canPartition = function (nums) {
  let sum = 0; // 总数是0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  // 如果总数是奇数的话 不可能划分成 两个数组
  if (sum % 2 !== 0) return false;
  let n = nums.length;
  sum = sum / 2; // 分割一半是 背包的容量

  let dp = []; // 定义二维数组空间

  // base case
  for (let i = 0; i <= n; i++) {
    dp[i] = [];
    dp[i][0] = true;
  }

  // 逻辑代码
  // 背包容量为0的时候肯定可以 装入
  // 所以从 1 开始
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= sum; j++) {
      // 容量 - 第 i - 1 个物件 不能装入背包
      if (j - nums[i - 1] < 0) {
        dp[i][j] = dp[i - 1][j];
      } else {
        // 可以装入背包中
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
      }
    }
  }
  console.log(dp);
  return dp[n][sum] || false;
};

canPartition([1, 5, 11, 5]);
