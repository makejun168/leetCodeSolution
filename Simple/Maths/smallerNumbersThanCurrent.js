/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let resArr = [];
    for (let i = 0; i < nums.length; i++) {
        resArr[i] = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                resArr[i]++
            }
        }
    }
    return resArr;
};
