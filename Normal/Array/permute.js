/**
 * @param {number[]} nums
 * @return {number[][]}
 */


// 递归算法



 // 回溯算法 dfs 算法
var permute = function(nums) {
    var result = [];
    let len = nums.length;
    let queue = [];
    let isUse = [];
    if (!len) {return []}
    for (let i = 0; i < nums.length; i++) {

    }
    function dfs(nums, len, start, queue, isUse, result) {
        if (len === start) {
            result.push([...queue]);
            return;
        }
        for (let i = 0; i < len; i++) {
            if (isUse[i]) {
                continue
            }
            queue.push(nums[i]);
            isUse[i] = true;
            dfs(nums, len, start + 1, queue, isUse, result);
            // 关键一步 回溯 将状态重置
            queue.pop();
            isUse[i] = false;
        }
    }
    dfs(nums,len, 0, queue, isUse, result);
    return result;
};

console.log(permute([1,2,3]));