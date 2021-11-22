在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

示例:

现有矩阵 matrix 如下：

```
[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
```

给定 target = 5，返回 true。

给定 target = 20，返回 false。


### 解法一 

暴力穷举法

* 时间复杂度 O(m * n) 横竖长度比较
* 时间复杂度 O(1)


```js
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === target) {
                return true
            }
        }
    }
    return false;
};
```

### 解法二

利用递增 从左边到右边 递增的顺序
动态设置 行列 位置，减少遍历的次数

* 目标数字小于二维数组中 第一行的最后一列的数字的话，将列的指针 - 1
* 目标数字大于二维数组中 第一行的最后一列的数字的话，将行的指针 + 1
* 等于的话将 输出 true
* 时间复杂度 O(n)
* 空间复杂度 O(1)

```js
var findNumberIn2DArray = function(matrix, target) {
    if (!matrix.length) return false
    let i = 0; // 下标
    let row_count = matrix.length; // 行
    let columns_count = matrix[0].length; // 列
    let j = matrix[0].length - 1;

    while (i < row_count && j >= 0) {
        let value = matrix[i][j];
        if (value === target) {
            return true;
        } else if (target < value) {
            j -= 1; // 上一列
        } else {
            i += 1; // 下一行
        }
    }
    return false;
};
```
