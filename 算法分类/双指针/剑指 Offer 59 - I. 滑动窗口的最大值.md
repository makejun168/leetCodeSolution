给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。

示例:

```
输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
输出: [3,3,5,5,6,7] 
解释: 

  滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7

```


### 解法一

暴力解法

#### 思路

* 遍历数组
* 

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    if (!nums.length) return [];
    let result = [];
    let i = 0;
    let j = i + k;

    for (let i = 0; i < nums.length - k + 1; i++) {
        let current = i;
        let max = nums[i];
        while (current < j) {
            if (nums[current] > max) {
                max = nums[current];
            }
            current++;
        }

        result.push(max);
        j++;
    }

    console.log(result);
    return result;
};
```