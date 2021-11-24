在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组，求出这个数组中的逆序对的总数。

示例 1:

```
输入: [7,5,6,4]
输出: 5
```

### 解法一

暴力解法

* 算法超时
* 时间复杂度 O(n^2)
* 空间复杂度 O(1)

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    let ans = [];
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                let result = [nums[i], nums[j]];
                ans.push(result);
            } else {
                continue;
            }
        }
    }
    
    console.log(ans);
    return ans.length; // 逆序对的长度
};

reversePairs([7,5,6,4])
```


### 解法二

二分查找法