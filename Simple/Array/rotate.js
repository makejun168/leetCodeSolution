// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  for (var i = 0; i < k; i++) {
    nums = [].concat(nums.splice(nums.length - 1), nums.slice(0, nums.length));
    // console.log(currentArr);
  }
};

var arr = [1, 2, 3, 4, 5, 6, 7];
rotate(arr, 3);
