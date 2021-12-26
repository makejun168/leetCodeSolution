给定一个数字，我们按照如下规则把它翻译为字符串：

0 翻译成 “a” ，
1 翻译成 “b”，……，
11 翻译成 “l”，……，
25 翻译成 “z”。

一个数字可能有多个翻译。

请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。

```
输入: 12258
输出: 5
解释: 12258有5种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi"
```

### 实际上是 数字的排列组合

* 1,2,2,5,8
* 1,22,5,8
* 1,2,25,8
* 12,25,8

### 计算 数组的长度

思路

* 定义长度 定义计算 counts 数组 count 数字
* 遍历每一个数字
* 计算指针 count 为 0 默认是 1

```js
/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function(num) {
    let numStr = num.toString();
    let length = numStr.length;
    let counts = [];
    let count = 0;
    
    for (let i = length - 1; i >= 0; --i) {
        count = 0;
        if (i < length - 1) {
            count = counts[i + 1];
        } else {
            count = 1;
        }
        
        if (i < length - 1) {
            let digit1 = numStr[i] - '0';
            let digit2 = numStr[i + 1] - '0';
            let converted = digit1 * 10 + digit2;
            if (converted >= 10 && converted <= 25) {
                if (i < length - 2) {
                    count += counts[i + 2];
                } else {
                    count += 1;
                }
            }
        }
        
        counts[i] = count;
    }
    
    // 返回可能出现的长度
    count = counts[0];
    return count;
};
```

### dp

动态规划 自底向上去考虑问题

整个数字的翻译结果数 = 除去最后一位的部分的翻译结果 * 最后一位数字

整个数字的翻译结果数 = 除去最后2位的部分的翻译结果 * 1


```js
var translateNum = function (num) {
    let numStr = num.toString();
    let length = numStr.length;
    if (length < 2) return length;
    
    let dp = [];
    dp[0] = 1;
    
    for (let i = 1; i < length; i++) {
        dp[i] = dp[i - 1];
        let currentNum = 10 * numStr[i - 1]  + numStr[i];
        // 状态转移 方程
        if (currentNum > 9 && currentNum < 26) {
            if (i - 2 < 0) {
                dp[i]++;
            } else {
                dp[i] += dp[i - 2];
            }
        }
    }
    return dp[length - 1];
}
```