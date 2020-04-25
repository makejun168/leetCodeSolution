/**
 * @param {number[]} nums
 * @return {number[][]}
 */


// 递归算法



 // 回溯算法 dfs 算法
var permute = function(nums) {
    var result = [];
    let len = nums.length;
    let queue = []; // 存放排列队列
    let isUse = []; // 判断是否已经使用过该节点
    if (!len) {return []}

    function dfs(nums, len, start, queue, isUse, result) {
        if (len === start) {
            result.push([...queue]);
            return;
        }
        for (let i = 0; i < len; i++) {
            if (isUse[i]) {
                continue
            }
            queue.push(nums[i]); //存入队列
            isUse[i] = true; // 判断已经存入队列的 数据
            dfs(nums, len, start + 1, queue, isUse, result); // 递归
            // 关键一步 回溯 将状态重置
            queue.pop();
            isUse[i] = false;
        }
    }
    dfs(nums,len, 0, queue, isUse, result);
    return result;
};

console.log(permute([1,2,3]));