### 题意

找出数组中重复的数字。


在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

#### 示例 1：

```
输入：
[2, 3, 1, 0, 2, 5, 3]
输出：2 或 3 
```

### 解法一

* 使用哈希表存放每一个数字key 如果，在哈希表出现存在重复的数字，马上就返回数字，结束循环
* 时间复杂度是 O(n)
* 空间复杂度是 O(n) 需要一个空间复杂度 未 O(n) 哈希表

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    if (!nums.length) return undefined
    let hash = new Map();
    let result = undefined;
    for (let i =0; i < nums.length; i++) {
        if (hash.has(nums[i])) {
            result = nums[i];
            break
        } else {
            hash.set(nums[i], 1)
        }
    }
    return result;
};
```

### 解法二
换位排序法 这里的前提是 数组里面的数字 **0 ~ n-1**

目标是实现 使用空间 为 O(1) 空间复杂度实现
* 遍历数组第i位，它的数字是为m
* m数字 是否等于 i 如果等于的话，开始判断下一位
* 如果不等于的话，那么第 m 位数字和 第 i 位数字进行交换，直到第 m 位的数字 等于第 i 位的数字为止
* 需要两层循环嵌套

* 时间复杂度是 O(n)
* 空间复杂度是 O(1)


```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    if (!nums.length) return undefined;
    let duplication = undefined
    for (let i =0; i < nums.length; i++) {
        // 判断 第 i 位 数字 是否等于 i 如果不等于 执行互相交换
        while (nums[i] !== i) {
            // 判断如果相等 那么就是重复的数字
            if (nums[i] === nums[nums[i]]) {
                duplication = nums[i];
                break;
            }
            
            let temp = nums[nums[i]]; // 第 m 位数字 作为数组下标的数
            nums[i] = nums[temp]; // 第 i 位数字 等于 目标下标的数
            nums[temp] = temp; // 替换
        }
    }
    return duplication;
};
```