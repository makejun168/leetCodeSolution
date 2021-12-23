输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。

为简单起见，标点符号和普通字母一样处理。例如输入字符串"I am a student. "，则输出"student. a am I"。

```
输入: "the sky is blue"
输出: "blue is sky the"
```

### 方法一 split 分割 反转 然后添加 空格

```js
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    if (!s) {return  ''}
    
    let reserve = s.split(' ').filter(i => i !== '').reverse();
    
    return reserve.join(' ')
};
```

### 方法二 双指针

```js
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    if (!s) {return  ''}
    s = s.trim(); // 去掉空格
    // 指向 倒数第一位
    let i = s.length - 1;
    let j = i;
    let res = [];

    while (i >= 0) {
        while (i >= 0 && s[i] != ' ') i--;
        res.push(s.substring(i + 1, j + 1) + ''); // 添加空格
        while (i >= 0 && s[i] == ' ') i--;
        j = i;
    }

    return res.join(' ').trim();
};
```

### 方法三

先反转整个句子里面每个字母，然后再翻转每个单词

```js

```