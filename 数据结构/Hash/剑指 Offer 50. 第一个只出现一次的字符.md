在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

示例 1:

```
输入：s = "abaccdeff"
输出：'b'
```

示例 2:

```
输入：s = "" 
输出：' '
```

### 解法一

通过哈希表记录字符串中的字符出现的次数

* 先遍历一次 记录字符串对应Key 出现的次数
* 再遍历一次 将第一个出现次数为 1 的值返回出来
* 时间复杂度 O(n)
* 空间复杂度 O(1) 由于 哈希表的大小 并不会很大 因此可以认为这种算法的空间复杂度是 O(1)

```js
/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
        if (!s.length) return " "; // 返回空的字符串
        let result = ' ';
        let hash = new Map();
        for (let i = 0; i < s.length; i++) {
            if (!hash.has(s[i])) {
                hash.set(s[i], 1)
            } else {
                hash.set(s[i], hash.get(s[i]) + 1); // 已经存在的话，+ 1
            }
        }
        // 遍历哈希表
        for (let item of hash) {
            // 哈希表第一位 是 key 第二位是 value
            if (item[1] === 1) {
                result = item[0]
                return result;
            }
        }
        return result;
};
```