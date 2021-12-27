给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），

每段绳子的长度记为 k[0],k[1]...k[m - 1] 。

请问 k[0]*k[1]*...*k[m - 1] 可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。


```
输入: 2
输出: 1
解释: 2 = 1 + 1, 1 × 1 = 1
```

```js
/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
    const arr = [null, null, 1, 2, 4];
    if (n <= 4) return arr[n];
    const mod = 1000000007;
    let res = 1;
    while (n > 4) {
        // 每次减掉3
        res = (res * 3) % mod;
        n -= 3;
    }
    // 最后剩下一段小于等于4的长度
    res *= n;
    
    return res % mod;
};
```