输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可。

示例 1：

```
输入：nums = [2,7,11,15], target = 9
输出：[2,7] 或者 [7,2]
```

示例 2：

```
输入：nums = [10,26,30,31,47,60], target = 40
输出：[10,30] 或者 [30,10]
```

### 解法一

暴力流解法

* 遍历嵌套
* 数组超大的时候会超时
* 时间复杂度 O(n^2)
* 时间复杂度 O(1)

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (target > nums[i]) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] === target) {
                    result.push(nums[i]);
                    result.push(nums[j]);
                    return result;
                }
            }
        }
    }
    return result;
};
``` 

### 解法二

哈希表记录

时间复杂度 O(n)
空间复杂度 O(n)

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = [];
    let hash = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (hash.has(target - nums[i])) {
            return [nums[i], target-nums[i]]
        }
        hash.set(nums[i], true)
    }
    return result;
};
``` 

### 解法三

双指针

* 递增的序列

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let i = 0;
    let j = nums.length - 1;
    let result = [];
    while (i < nums.length && j >= 0) {
        let sum = nums[i] + nums[j];
        if (sum === target) {
            return [nums[i], nums[j]];
        } else if (sum > target) {
            j = j - 1;
        } else {
            i = i + 1;
        }
    }
    
    return result;
};
``` 

### 解法四

