请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。

示例 1:

```
输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

示例 2:
```
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```

### 解法一

#### 思路
循环嵌套（第一直觉的思路，不是最优解）

* 定义最大长度 1
* 开始遍历字符串，从下标 0 开始遍历，直接存入哈希表中
* 下一个字符，如果不存在哈希表中，那么，长度 和 最大长度比较是否需要替换成为最大程度
* 下一个字符如果存在，那么哈希表清空，然后将当前的 下标作为指针 继续循环执行
* 时间复杂度 O(n^2)
* 空间复杂度 O(n)

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s.length) return 0;
    let max = 1; // 最大长度是 1
    for (let i = 0; i < s.length; i++) {
        let hash = new Map();
        hash.set(s[i]); // 存入哈希表中
        let currentMax = 1;
        for (let j = i + 1; j < s.length; j++) {
            if (!hash.has(s[j])) {
                hash.set(s[j]);
                currentMax++;
                if (currentMax > max) {
                    max = currentMax;
                }
                continue;
            } else {
                break;
            }
        }
    }
    return max;
};

lengthOfLongestSubstring('abcabcbb');
```

### 解法二

哈希表 + 双指针 解法

#### 思路

想办法降低 时间复杂度 从 O(n)
用哈希表存 是否存在重复的数字，如果重复重置哈希表

* 确定遍历的次数 肯定是 s的长度
* 确定循环体 i 索引下标 
* 

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s.length) return 0;
    let max = 0; // 最大长度是 1
    let hash = new Map();
    let count = -1; // 指针
    for (let i = 0; i < s.length; i++) {
        if (hash.has(s[i])) {
            count = Math.max(count, hash.get(s[i])); // 更新指针的位置
        }
        hash.set(s[i], i); // 更新的是指针的 下标
        max = Math.max(max, i - count)
    }
    return max;
};
```