/**
 * @param {number[]} nums
 * @return {number}
 */

var rob = function (nums) {
  let size = nums.length;
  if (size === 1) return nums[0];
  return Math.max(robRange(nums, 0, size - 2), robRange(nums, 1, size - 1));
};

var robRange = function (nums, start, end) {
  let dp_1 = 0;
  let dp_2 = 0;
  let dp_i = 0;

  for (let i = end; i >= start; i--) {
    dp_i = Math.max(dp_1, nums[i] + dp_2);
    dp_2 = dp_1;
    dp_1 = dp_i;
  }
  console.log(dp_i);
  return dp_i;
};

rob([2, 3, 2]);
