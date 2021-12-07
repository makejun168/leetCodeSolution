一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

示例 1：

```
输入：n = 2
输出：2
```

示例 2：

```
输入：n = 7
输出：21
```

### 解法一 

记忆化搜索 dp 问题

* dp[1] = 1
* dp[2] = 2
* dp[3] = 3
* dp[4] = 5
* dp[5] = 8
* dp[6] = 13
* dp[7] = 21

规律是 dp[n] = dp[n - 1] + dp[n - 2];

```js
/**
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
    if (n === 0) return 1;
    // dp 从 1 开始
    let dp = new Array(n + 1).fill(0);
    dp[1] = 1;
    dp[2] = 2;
    
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[n];
};
```


### 状态压缩


```js
var numWays = function(n) {
    let n1 = 1, n2 = 2, sum;
    for(let i = 3; i < n; i++){
        sum = (n1 + n2) % 1000000007;
        n1 = n2;
        n2 = sum;
    }
    return n1;
};
```