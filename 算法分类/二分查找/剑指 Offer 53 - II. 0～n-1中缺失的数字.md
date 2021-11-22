一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。

示例 1:

```
输入: [0,1,3]
输出: 2
```

示例 2:

```
输入: [0,1,2,3,4,5,6,7,9]
输出: 8
```

### 解法一

#### 思路
* 确定循环体次数, 遍历一遍并且将数据存入到哈希表中
* 遍历哈希表，如果哈希表中的数字Key 与 value 不相同
* 时间复杂度 O(n)
* 空间复杂度 O(1)

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let len = nums.length; // 数组的长度
    for (let i = 0; i < len; i++) {
        if (nums[i] !== i) {
            return i;
        }
    }
    return len;
};
```


### 解法二

**排序数组中的搜索问题，首先想到 二分法 解决。**

* 这里可以理解成一个排序好的数组 从 0 开始 到 n - 1 结束
* 根据题意，先去找边界，左边数组和右边的数组
* 左边数组 nums[i] = i
* 右边数组 nums[i] !== i
* 缺少数字应该为 右边子数组首位元素 对应的索引


```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let i = 0;
    let j = nums.length;
    while(i < j) {
        let mid = Math.floor((j + i) / 2) // 获取中位数
        if (nums[mid] === mid) {
            i = mid + 1;
        } else {
            j = mid;
        }
    }
    
    return i;
};
```