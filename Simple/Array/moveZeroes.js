/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */


var swap = function(a, b) {
  a ^= b;
  b ^= a;
  a ^= b;
  return {a, b}
}
var moveZeroes = function(nums) {
  for (let lastNonZeroFoundAt = 0, cur = 0; cur < nums.length; cur++) {
    if (nums[cur] !== 0) {
      lastNonZeroFoundAt++;
    }
    if (cur === nums.length - 1) {
      console.log(lastNonZeroFoundAt);
      console.log(cur);
    }
  }
};

// var moveZeroes = function(nums) {
//   let j = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] != 0) [nums[j++], nums[i]] = [nums[i], nums[j]]; 
//   }
// }

console.log(moveZeroes([0,1,0,3,12]))