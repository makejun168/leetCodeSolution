/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  if (!nums.length) return 0;
  let resArr = [];
  for (let i = 0; i < nums.length; i++) {
    resArr[i] = helper(nums, i, nums[i]);
  }
  return resArr;
};

var helper = function(nums, idx, total) {
  if (idx - 1 < 0) {
    return total;
  } else {
    if (idx + 1 <= nums.length ) {
      total += nums[idx - 1];
    }
    return helper(nums, idx - 1, total);
  }
}

runningSum([1,2,3,4]);
