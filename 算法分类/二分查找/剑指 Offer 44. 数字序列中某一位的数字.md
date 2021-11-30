数字以0123456789101112131415…的格式序列化到一个字符序列中。在这个序列中，第5位（从下标0开始计数）是5，第13位是1，第19位是4，等等。

请写一个函数，求任意第n位对应的数字。

示例 1：

```
输入：n = 3
输出：3
```

示例 2：

```
输入：n = 11
输出：0
```

```js
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    let i = 0;
    let j = n;
    while (i !== j) {
        let middle = Math.floor((i + j) / 2);
        if (numbers[middle] < numbers[j]) {
            j = middle
        } else if (numbers[middle] > numbers[j]) {
            i = middle + 1;
        } else {
            j -= 1
        }
    }
};
```