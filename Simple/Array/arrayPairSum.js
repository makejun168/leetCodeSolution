/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  return nums.sort((a,b)=>a-b).filter((item,index)=> index % 2 === 0).reduce((t,i)=> t+i)
};

arrayPairSum([1,4,3,2]);
