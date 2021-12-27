给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），

每段绳子的长度记为 k[0],k[1]...k[m-1] 。

请问 k[0]*k[1]*...*k[m-1] 可能的最大乘积是多少？

例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。

```
输入: 2
输出: 1
解释: 2 = 1 + 1, 1 × 1 = 1
```

### dp 数组动态规划实现


```js
/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
    if (n === 0) return 0;
    let dp = new Array(n + 1).fill(0);
    if (n < 2) return 0;
    if (n === 2) return 1;
    if (n === 3) return 2;
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 1;
    dp[3] = 2;
    
    for (let i = 4; i <= n; ++i) {
        // 状态转移方程
        var max = 0;
        for (let j = 1; j <= i / 2; ++j) {
            let product = dp[j] * dp[i - j];
            if (max < product) {
                max = product
            }
            dp[i] = max;
        }
    }
    
    return dp[n];
};
```


### 贪婪算法


```js
/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
    if (n === 0) return 0;
    
    if (n < 2) return 0;
    if (n === 2) return 1;
    if (n === 3) return 2;
    
    let timesOf3 = Math.floor(n / 3);
    
    if (n - (timesOf3 * 3) === 1) {
        timesOf3 -= 1;
    }
    
    let timeOf2 = Math.floor((n - (timesOf3 * 3)) / 2);
    
    return Math.pow(3, timesOf3) * Math.pow(2, timeOf2);
};
```
