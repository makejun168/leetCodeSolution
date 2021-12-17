输入一个字符串，打印出该字符串中字符的所有排列。

你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

```
输入：s = "abc"
输出：["abc","acb","bac","bca","cab","cba"]
```

### 字符串全排列

```js
/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
    if (s.length === 0) return [''];
    // 递归出口
    if (s.length === 1) return [s];
    const res = [];
    const len = s.length;
    for (let i = 0; i < len; i++) {
        // 取出一个字符为char
        const char = s[i];
        // newStr=去掉char后剩下的字符
        let newStr = s.slice(0, i) + s.slice(i + 1);
        // 递归产生newStr的全排列
        const next = permutation(newStr);
        // 将char与newStr的全排列拼接，放入res
        next.forEach(item => {
            res.push(char + item);
        });
    }
    // 去重
    return [...new Set(res)];
    
};
```