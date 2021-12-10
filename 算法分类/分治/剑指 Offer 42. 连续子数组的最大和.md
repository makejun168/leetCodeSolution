输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。

要求时间复杂度为O(n)。


```
输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
```

### dp

* 构建DP数组
* 返回DP数组最大值
* 时间复杂度 O(n)

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (!nums.length) {
        return null
    }
    let dp = [];
    dp[0] = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        dp[i] = nums[i] > dp[i - 1] + nums[i] ? nums[i] : dp[i - 1] + nums[i];
    }
    return Math.max(...dp);
};

maxSubArray([-2,1,-3,4,-1,2,1,-5,4])
```