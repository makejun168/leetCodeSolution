/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let result = [];
  let i = 0;
  let count = 0;
  while (i < nums.length) {
    if(nums[i] === 1) {
      count++;
    }
    if (nums[i] !== 1) {
      count = 0;
    }
    result.push(count);
    i++;
  }
  return Math.max(...result);
};

findMaxConsecutiveOnes([1,1,0,1,1,1])
