输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。

```
输入: n = 1
输出: [1,2,3,4,5,6,7,8,9]
```

### 数学解法

* 获取到证书

```js
/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
    let totalLen = Math.pow(10, n);
    let result = []
    for (let i = 1; i < totalLen; i++) {
        result.push(i);
    }
    return result;
};
```