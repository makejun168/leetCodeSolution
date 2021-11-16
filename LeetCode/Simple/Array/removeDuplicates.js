// 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
// 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

// 给定数组 nums = [1,1,2],

// 函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。

// 你不需要考虑数组中超出新长度后面的元素。

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length == 0) return 0;
  //判断无输入
  var number = 0; //标记计数
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] != nums[number]) {
      number++;
      nums[number] = nums[i];
    }
  }
  number += 1; //标记+1即为数字个数
  return number;
};
var nums = [1, 1, 2];
var newNums = removeDuplicates(nums);
console.log(newNums);
