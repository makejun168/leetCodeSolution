输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。

```
输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]
```

```
输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]
```

### 顺时针打印 二维数组

* 

```js
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (!matrix.length) return [];
    let result = [];
    let columns = matrix[0].length;
    let rows = matrix.length;
    let start = 0;
    
    let endX = columns - 1 - start;
    let endY = rows - 1 -start;
    
    // 从左边到右边打印
    for (let i = start; i <= endX; ++i) {
        let number = matrix[start][i];
        result.push(number);
    }
    
    // 从上到下打印
    if (start < endY) {
        for (let i = start + 1; i <= endY; ++i) {
            let number = matrix[i][endX];
            result.push(number);
        }
    }
    
    // 右边到左边打印
    if (start < endX && start < endY) {
        for (let i = endX; i >= start + 1; --i) {
            let number = matrix[endY][start];
            result.push(number);
        }
    }

    // 上到下打印
    if (start < endX && start < endY - 1) {
        for (let i = endY - 1; i >= start + 1; --i) {
            let number = matrix[i][start];
            result.push(number);
        }
    }
    
    return result;
};
```