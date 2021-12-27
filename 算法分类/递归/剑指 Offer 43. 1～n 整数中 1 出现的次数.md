输入一个整数 n ，求1～n这n个整数的十进制表示中1出现的次数。

例如，输入12，1～12这些整数中包含1 的数字有1、10、11和12，1一共出现了5次。


```
输入：n = 12
输出：5
```

```
输入：n = 13
输出：5
```


### 暴力解法超出时间限制

```js
/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    let count = 0;
    
    for (let i = 1; i <= n; i++) {
        let current = i.toString();
        for (let j = 0; j < current.length; j++) {
            if (current[j] === '1') count++;
        }
    }
    
    return count;
};
```

```js
/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    let count = 0;
    let digit = 1;
    let high = Math.floor(n / 10); // 高位
    let cur = n % 10, low = 0; // 当前 & 低位
    
    while (high !== 0 || cur !== 0) {
        if (cur === 0) count += high * digit;
        else if (cur === 1) count += high * digit + low + 1;
        else count += (high + 1) * digit;
        
        low += cur * digit;
        cur = high % 10;
        high = Math.floor(high / 10);
        digit *= 10;
    }
    
    return count;
};

countDigitOne(12)
```