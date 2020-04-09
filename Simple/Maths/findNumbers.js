// 统计数字的位数的 多少
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count = 0;
    for (let i = 0 ; i < nums.length; i ++) {
        if (String(nums[i]).length % 2 === 0) {
            count++
        }
    }
    return count;
};

findNumbers([12,345,2,6,7896])
