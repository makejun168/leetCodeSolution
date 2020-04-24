/**
 * @param {number[]} nums
 * @return {number}
 */

// 哈希表
// var majorityElement = function(nums) {
//   let obj = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (obj[nums[i]] !== undefined) {
//       obj[nums[i]] += 1;
//     } else {
//       obj[nums[i]] = 1;
//     }
//   }
//   let result = null;
//   for (let key in obj) {
//     if (obj[key] > nums.length / 2) {
//       result = +key
//     }
//   }
//   return result
// };

var majorityElement = function(nums) {
  nums.sort();
  return nums[Math.floor(nums.length / 2)];
};

// 1,2,1,0,1,0,1
// 2,2,2,2,1,1,2

var majorityElement = function(nums) {
  let count = 0;
  let candidate = null;

  for (let num of nums) {
    if (count == 0) {
      candidate = num;
    }
    count += (num === candidate) ? 1 : -1;
  }
  // console.log(candidate)
  return candidate;
}

majorityElement([2,2,1,1,1,2,2]);
