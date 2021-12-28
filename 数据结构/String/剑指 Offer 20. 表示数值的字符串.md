请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。

数值（按顺序）可以分成以下几个部分：

若干空格
一个 小数 或者 整数
（可选）一个 'e' 或 'E' ，后面跟着一个 整数
若干空格
小数（按顺序）可以分成以下几个部分：

（可选）一个符号字符（'+' 或 '-'）
下述格式之一：
至少一位数字，后面跟着一个点 '.'
至少一位数字，后面跟着一个点 '.' ，后面再跟着至少一位数字
一个点 '.' ，后面跟着至少一位数字
整数（按顺序）可以分成以下几个部分：

（可选）一个符号字符（'+' 或 '-'）
至少一位数字
部分数值列举如下：

["+100", "5e2", "-123", "3.1416", "-1E-16", "0123"]
部分非数值列举如下：

["12e", "1a3.14", "1.2.3", "+-5", "12e+5.4"]

```
输入：s = "0"
输出：true
```

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    if(s == null || s.length == 0) return false; // s为空对象或 s长度为0(空字符串)时, 不能表示数值
    let isNum = false, isDot = false, ise_or_E = false; // 标记是否遇到数位、小数点、‘e’或'E'
    let str = s.trim();  // 删除字符串头尾的空格，转为字符数组，方便遍历判断每个字符
        
    for(let i = 0; i < str.length; i++) {
        if(str[i] >= '0' && str[i] <= '9') isNum = true; // 判断当前字符是否为 0~9 的数位
        else if(str[i] == '.') { // 遇到小数点
            if(isDot || ise_or_E) return false; // 小数点之前可以没有整数，但是不能重复出现小数点、或出现‘e’、'E'
            isDot = true; // 标记已经遇到小数点
        } else if(str[i] == 'e' || str[i] == 'E') { // 遇到‘e’或'E'
            if(!isNum || ise_or_E) return false; // ‘e’或'E'前面必须有整数，且前面不能重复出现‘e’或'E'
            ise_or_E = true; // 标记已经遇到‘e’或'E'
            isNum = false; // 重置isNum，因为‘e’或'E'之后也必须接上整数，防止出现 123e或者123e+的非法情况
        } else if(str[i] == '-' ||str[i] == '+') {
            if(i!=0 && str[i-1] != 'e' && str[i-1] != 'E') return false; // 正负号只可能出现在第一个位置，或者出现在‘e’或'E'的后面一个位置
        } else return false; // 其它情况均为不合法字符
    }
    return isNum;
};
```

### 剑指 Offer 官方解答方案

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    if (s === null) return false;
    
    let cursor = 0;
    let isValid; // 标识变量，当前扫描是否有效
    
    var scanInteger = function (str) {
        if (str[cursor] === '+' || str[cursor] === '-') {
            cursor++;
        }
        return scanUnsignedInteger(str);
    }
    
    var scanUnsignedInteger = function (str, index) {
        let temp = cursor;
        while (str[cursor] >= '0' && str[cursor] <= '9') {
            cursor++;
        }
        return str[temp] >= '0' && str[temp] <= '9'; // 判断当前指针是否指向数字0-9
    }
    
    s = s.trim(); // 删除开头结尾的空格
    
    isValid = scanInteger(s); // 先扫描整数部分

    if (s[cursor] === '.') { // 此时扫完整数部分，看看有没有遇到小数点
        cursor++;                     // 指针跳过小数点
        if (scanUnsignedInteger(s)) { // 扫描小数部分的整数
            isValid = true;                // 如果返回true，说明暂时是有效的数字
        }
        // 如果返回false，还不能说明是错的，因为有 '3.' 这种case
    }

    if (s[cursor] === 'e' || s[cursor] === 'E') { // 看看有没有遇到e/E
        cursor++;                    // 指针跳过E/e
        if (isValid) {               // E/e前面一定要是有效整数
            isValid = scanInteger(s);  // E/e后面可以是有符号整数 比如 1e-9
        }
    }

    if (s[cursor] !== undefined) { // 此时指针该越界了，我们希望它是undefined
        return false;     // 如果不是，那就false 比如 '3..' '3 8'，一个是.一个是8
    }
    
    return isValid;
};
```