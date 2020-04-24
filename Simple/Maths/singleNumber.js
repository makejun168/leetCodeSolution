/**
 * @param {number[]} nums
 * @return {number}
 */

//  时间复杂度 是 O(n) + O(n)

var singleNumber = function(nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] !== undefined) {
      obj[nums[i]] += 1;
    } else {
      obj[nums[i]] = 1;
    }
  }
  let result = null;
  for (let key in obj) {
    if (obj[key] === 1) {
      result = +key
    }
  }
  console.log(result);
};




var singleNumber = function(nums) {
  let a = 0;
  for (let item of nums) {
    a ^= item;
  }
  return a;
}


console.log(singleNumber([4,1,2,1,2]))