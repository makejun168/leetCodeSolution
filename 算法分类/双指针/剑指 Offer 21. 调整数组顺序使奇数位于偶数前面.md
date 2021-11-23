输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数在数组的前半部分，所有偶数在数组的后半部分。

例子：

```
输入：nums = [1,2,3,4]
输出：[1,3,2,4] 
注：[3,1,2,4] 也是正确的答案之一。
```

### 解法一
暴力解法，遍历一次数组，然后根据奇数判断将，数字拼接到数组的前后

* 时间复杂度 O(n)
* 空间复杂度 O(1)

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    if (!nums.length) return [];
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 !== 0) {
            result.unshift(nums[i])
        } else {
            result.push(nums[i])
        }
    }
    return result;
};
```

### 解法二

双指针解法

* 优化时间复杂度，左边的指针指向头部，右边的指针指向尾部
* 判断左指针是偶数而且右指针是奇数，那左指针往右移动一位，右指针往左移一位，两个数字交换
* 判断左指针是奇数而且右指针是偶数，那么左指针往右移动一位，右指针往左移一位。不需要操作
* 判断左指针是奇数而且判断右指针是奇数，那么左指针往右移一位
* 判断左指针是偶数而且判断右指针是偶数，那么右指针往左移一位
* 最后返回数组结果

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    let i = 0;
    let j = nums.length - 1;

    while (i < j) {
        // 判断左边的指针是否为 偶数
        if (nums[i] % 2 === 0 && nums[j] % 2 !== 0) {
            nums[i] ^= nums[j];
            nums[j] ^= nums[i];
            nums[i] ^= nums[j]; // 交换位置
            i += 1;
            j -= 1;
        } else if (nums[i] % 2 !== 0 && nums[j] % 2 === 0) {
            i += 1;
            j -= 1;
        } else if (nums[i] % 2 !== 0 && nums[j] % 2 !== 0) {
            i += 1;
        } else {
            j -= 1;
        }
    }

    return nums;
};
```

