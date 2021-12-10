写一个函数，求两个整数之和，要求在函数体内不得使用 “+”、“-”、“*”、“/” 四则运算符号。

```
输入: a = 1, b = 1
输出: 2
```

### 位运算实现两数 之和

```js
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function(a, b) {
    while (b != 0) {
        let c = (a & b) << 1; // c 进位
        a ^= b; // a = 非进位和
        b = c; // b = 进位 下一轮循环
    }
    return a;
};
```