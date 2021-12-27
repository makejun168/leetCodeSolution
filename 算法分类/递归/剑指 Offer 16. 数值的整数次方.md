实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn）。不得使用库函数，同时不需要考虑大数问题。

```
输入：x = 2.00000, n = 10
输出：1024.00000
```

```js
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    // 递归出口
    if (n === 0) return 1;
    
    // n小于0，特殊情况
    if (n < 0) return 1 / myPow(x, -n);
    
    // n奇数
    if (n & 1) return x * myPow(x, n - 1);
    
    // n偶数
    return myPow(x * x, n / 2);
};
```