// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let singleNum = null;
  for (var i = 0; i < nums.length; i++) {
    var flag = true;
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        var flag = false;
        break;
      }
    }
    if (flag) {
      singleNum = nums[i];
      break;
    }
  }
  return singleNum;
};
var arr = [2, 2, 1];
console.log(singleNumber(arr));
