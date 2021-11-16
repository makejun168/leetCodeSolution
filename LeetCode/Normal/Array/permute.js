/**
 * @param {number[]} nums
 * @return {number[][]}
 */


// 递归算法



 // 回溯算法 dfs 算法
 // 递归树木节点决定的
 // 时间和空间 O(n * n!) 指数级别
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

// 广度优先遍历 其他方法
var permute = function(nums) {
    let result = [];
    let prev = null;
    let cur = [];
    for (let i = 0; i < nums.length; i++) {
        prev = result;
        result = [];
        for (let j = 0; j < prev.length; j++) {
            cur = prev[i];
            if (j < cur.length) {
                cur.splice(j, 0, nums[i]);
            } else {
                cur.push(nums[i]);
            }
            result.push(cur);
        }
    }
    return result;
};

console.log(permute([1,2,3]));