请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

示例 1：

```
输入：s = "We are happy."
输出："We%20are%20happy."
```


### 解法一

#### 思路

通过临时变量存，空间占用会多

```js
/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    if (!s.length) return s;
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            result += '%20'
        } else {
            result += s[i];
        }
    }
    return result
};
```

### 解法二

JavaScript replace 方法

### 解法三