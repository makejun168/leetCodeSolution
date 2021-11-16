/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let maxDistance = 0;
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] === 0 && maxDistance <= i) break;//如果当前位置值为0，且当前能到达的最远距离还小于等于这个位置，那么它已经走不到后面了，直接退出循环就好了
    // 当前的 下标 + 当前的可以跳的距离 和 最大距离 比较 如果小于最大驱离 继续贪心算法
    if (i + nums[i] > maxDistance) {
      maxDistance = i + nums[i];
    }
  }
  // console.log(maxDistance >= len- 1);
  return maxDistance >= len - 1;
};

var canJump = function (nums) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > k) {
      return false;
    }
    k = Math.max(k, i + nums[i]);
  }
  return true;
}

var canJump = function (nums) {
  var arr = Array(nums.length).fill(false);
  arr[nums.length - 1] = true;
  for (var right = nums.length - 2; right >= 0; right--) {
    var cur = Math.min(right + nums[right], nums.length - 1);
    for (var left = right + 1; left <= cur; left++) {
      if (arr[left] == true) {
        arr[right] = true;
        break;
      }
    }
  }
  return arr[0];
}

canJump([2, 3, 1, 1, 4]);
