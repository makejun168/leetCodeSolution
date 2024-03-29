给定一个数组 A[0,1,…,n-1]，请构建一个数组 B[0,1,…,n-1]，

其中 B[i] 的值是数组 A 中除了下标 i 以外的元素的积, 
即 B[i]=A[0]×A[1]×…×A[i-1]×A[i+1]×…×A[n-1]。不能使用除法。

```
输入: [1,2,3,4,5]
输出: [120,60,40,30,24]
```

### 构建数组

|  | A[0] | A[1] | A[2] | A[3] | A[4] |
| --- | --- | --- | --- | --- | --- |
| B[0] = 1 * 2 * 3 * 4 * 5 = 120 | 1 | 2 | 3 | 4 | 5 |
| B[1] = 1 * 3 * 4 * 5 = 60 | 1 | 1 | 3 | 4 | 5 |
| B[2] = 2 * 4 * 5 = 40 | 1 | 2 | 1 | 4 | 5 |
| B[3] = 6 * 5 = 30 | 1 | 2 | 3 | 1 | 5 |
| B[4] = 24 * 1 = 24 | 1 | 2 | 3 | 4 | 1 |

```
输出: [120,60,40,30,24]
```

```js
/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function(a) {
    if (!a.length) {
        return []
    }
    let b = [];
    
    // 开始处理逻辑
    let tmp = 1;
    b[0] = 1;
    // 构建下三角形的 数组
    for (let i = 1; i < a.length; i++) {
        b[i] = b[i - 1] * a[i - 1];
    }
    
    // 构建上三角形的 数组
    for (let i = a.length - 2; i >= 0; i--) {
        tmp *= a[i + 1];
        b[i] *= tmp;
    }
    
    return b;
};
```