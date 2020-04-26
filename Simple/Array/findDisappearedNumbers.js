/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let queue = [];
  let len = null;
  let max = Math.max(...nums);
  if (max < nums.length) {
    len = nums.length;
  } else {
    len = max;
  }
  for (let i = 1; i <= len; i++) {
    if (nums.indexOf(i) === -1) {
      queue.push(i);
    }
  }
  return queue;
};

findDisappearedNumbers([2, 2]);