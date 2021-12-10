编写一个函数，输入是一个无符号整数（以二进制串的形式），
返回其二进制表达式中数字位数为 '1' 的个数（也被称为 汉明重量).）。



```js
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    // 巧用 x &= x - 1 清零 最低位的1 这一特性不断迭代n 并记数count即可
    let count = 0

    while (n) {
        count++
        n &= n - 1
    }

    return count
};
```

### 位数检查 解法

* 时间复杂度：O(k)，kk 为 int 的位数，固定为 32 位
* 空间复杂度：O(1)

```js
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
   let ans = 0;
   
   for (let i = 0; i < 32; i++) {
       // 右位运算 结果 是否为 1
       ans += ((n >> i) & 1);
   }
   
   return ans
};
```

