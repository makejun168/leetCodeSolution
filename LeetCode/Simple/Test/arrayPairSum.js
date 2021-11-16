// 给定长度为 2n 的数组, 你的任务是将这些数分成 n 对, 
// 例如(a1, b1), (a2, b2), ..., (an, bn) ，
// 使得从1 到 n 的 min(ai, bi) 总和最大。

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    if(!nums.length){
        return 0;
    }
    let res = 0;
    let resultArr = [];
    for(var i=0,len=nums.length;i<len;i++){
        for(var j=i+1;j<nums.length;j++){
            
        }
    }
    return res
};

var nums = [1,4,3,2];
console.log(arrayPairSum(nums));