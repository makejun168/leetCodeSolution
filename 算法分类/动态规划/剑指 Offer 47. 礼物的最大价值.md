在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。

你可以从棋盘的左上角开始拿格子里的礼物，

并每次向右或者向下移动一格、直到到达棋盘的右下角。

给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？

```
输入: 
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
输出: 12
解释: 路径 1→3→5→2→1 可以拿到最多价值的礼物
```

### 穷举 所有出现的情况 算最大值

```
输入: 
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
输出: 12
解释: 路径 1→3→5→2→1 可以拿到最多价值的礼物
```

#### 穷举全部的情况

* 1,1,4,2,1 9
* 1,3,1,1,1 7
* 1,1,5,1,1 9
* 1,1,5,2,1 10
* 1,3,5,2,1 12
* 1,3,5,1,1 11

设 f(i, j)f(i,j) 为从棋盘左上角走至单元格 (i ,j)(i,j) 的礼物最大累计价值，易得到以下递推关系：f(i,j)f(i,j) 等于 f(i,j-1)f(i,j−1) 和 f(i-1,j)f(i−1,j) 中的较大值加上当前单元格礼物价值 grid(i,j)grid(i,j)

```
f(i,j) = max(f(i, j - 1), f(i - 1, j)) + grid(i, j)
```

```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function(grid) {
    let columns = grid[0].length;
    let row = grid.length;
    
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < columns; j++) {
            if (i=== 0 && j === 0) continue;
            if(i == 0) grid[i][j] += grid[i][j - 1] ;
            else if(j == 0) grid[i][j] += grid[i - 1][j];
            else grid[i][j] += Math.max(grid[i][j - 1], grid[i - 1][j]);
        }
    }
    return grid[row - 1][columns - 1];
};
```

### dp

dp 数组实现

```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function(grid) {
    let columns = grid[0].length;
    let row = grid.length;
    let dp = new Array(row + 1).fill(new Array(columns + 1).fill(0));
    
    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= columns; j++) {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + grid[i - 1][j - 1];
        }
    }
    return dp[row][columns];
};
```