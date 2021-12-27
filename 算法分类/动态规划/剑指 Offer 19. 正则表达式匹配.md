请实现一个函数用来匹配包含'. '和'*'的正则表达式。

模式中的字符'.'表示任意一个字符，而'*'表示它前面的字符可以出现任意次（含0次）。

在本题中，匹配是指字符串的所有字符匹配整个模式。例如，字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，但与"aa.a"和"ab*a"均不匹配。

```
输入:
s = "aa"
p = "a"
输出: false
解释: "a" 无法匹配 "aa" 整个字符串。
```


```
输入:
s = "aa"
p = "a*"
输出: true
解释: 因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。
```

```
输入:
s = "ab"
p = ".*"
输出: true
解释: ".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。
```

```
输入:
s = "mississippi"
p = "mis*is*p*."
输出: false
```


```js
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const n = s.length + 1, m = p.length + 1, dp = []
    for (let i = 0; i < n; i++) {
        dp.push(Array(m).fill(0))
    }
    
    dp[0][0] = true
        
    for(let j = 2; j < m; j += 2) {
        dp[0][j] = dp[0][j - 2] && p[j - 1] == '*'
    }
    
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if (p[j-1] == '*') {
                dp[i][j] = dp[i][j-2] || dp[i-1][j] && (s[i-1] == p[j-2] || p[j-2] == '.')
            } else {
                dp[i][j] = dp[i-1][j-1] && (s[i-1] == p[j-1] || p[j-1] == '.')
            }
        }
    }
    
    return dp[n-1][m-1]
};
```
