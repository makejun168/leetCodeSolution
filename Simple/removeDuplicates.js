/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if(!nums.length)return
    let result = {};
    for (let item of nums){
        if (!result[item]){
            result[item] = item;
        }
    }
    return Array.from(Object.keys(result))
};
var nums = [1,1,2];
var newNums = removeDuplicates(nums);
console.log(newNums);