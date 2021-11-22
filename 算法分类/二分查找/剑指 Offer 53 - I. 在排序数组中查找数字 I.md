统计一个数字在排序数组中出现的次数。

示例 1:

```
输入: nums = [5,7,7,8,8,10], target = 8
输出: 2
```


示例 2:

```
输入: nums = [5,7,7,8,8,10], target = 6
输出: 0
```


提示：

* 0 <= nums.length <= 10^5
* -10^9 <= nums[i] <= 10^9
* nums 是一个非递减数组
* -10^9 <= target <= 10^9


### 解法一
暴力流解法，遍历等于目标 次数++

* 时间复杂度 O(n)
* 空间复杂度 O(1)

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) result++;
    }
    return result;
};
```


### 哈希表记录目标数字的出现次数

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let hash = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!hash.has(nums[i])) {
            hash.set(nums[i], 1);
        }
        if (nums[i] === target) {
            hash.set(nums[i], hash.get(nums[i]) + 1);
        };
    }
    return hash.get(target);
};
```


### 二分查找

* 排序数组的查找数，一般思路是二分查找的办法
* 二分查找大于等于target的最左下标，记为l，若nums[l]!=target，说明数组中没有target，返回0
* 二分查找小于等于target的最右下标，记为r，上一步没有返回，说明nums[r]肯定等于target 
* 区间[lo...r]中的数字都等于target，因此 r - l + 1 就是target的个数 
* 时间复杂度O(logn)，
* 空间复杂度O(1)

```js
var helper = function (nums, target) {
    let i = 0, j = nums.length - 1; // j 索引是 最后一个数组的数
    while (i < j) {
        let mid = Math.floor((i + j) / 2);
        // 判断当前 Target 是在 中位数的左边还是右边
        if (nums[mid] <= target) {
            i = mid + 1;
        } else {
            j = mid - 1;
        }
    }
    return i
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    return helper(nums, target) - helper(nums, target - 1);
};
```
