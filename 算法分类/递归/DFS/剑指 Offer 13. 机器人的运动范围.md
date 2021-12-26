地上有一个m行n列的方格，从坐标 [0,0]到坐标 [m-1,n-1] 。

一个机器人从坐标 [0, 0] 的格子开始移动，
它每次可以向左、右、上、下移动一格（不能移动到方格外），
也不能进入行坐标和列坐标的数位之和大于k的格子。
例如，当k为18时，机器人能够进入方格 [35, 37] ，
因为3+5+3+7=18。但它不能进入方格 [35, 38]，
因为3+5+3+8=19。请问该机器人能够到达多少个格子？


示例 1：

```
输入：m = 2, n = 3, k = 1
输出：3
```

示例 2：

```
输入：m = 3, n = 1, k = 0
输出：1
```

### DFS 深度优先遍历

DFS 就是 递归的一种
自顶向下递归出现问题的可能性，出现可能性的时候 count++;
判断是否越界，结束递归

```js
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

var movingCount = function(m, n, k) {
    // 构建矩阵 row 是 m columns 是 n
    const grid =  Array.from({length:m},()=>new Array(n).fill(1));
    
    // 最后返回的结果 count
    let count = 0;
    
    // 递归调用 计算可以移动的值
    function hepler(i, j) {
        if(i < 0 || j < 0 || i > m-1 || j > n-1 || grid[i][j] === 0 || getSum(i, j) > k) return;
        count++;
        grid[i][j] = 0;
        hepler(i - 1, j);
        hepler(i + 1, j);
        hepler(i, j - 1);
        hepler(i, j + 1);
    }
    
    // 从 0,0 开始
    hepler(0,0);
    
    return count;
};

// 判断是否越界
function getSum(num1,num2) {
    let sum = 0;
    // 转字符串 3,5,3,7
    for(let num of num1 + '' + num2) {
        sum += +num;
    }
    // 返回 总数
    return sum;
}
```

```js
var movingCount = function (m, n, k) {
    // 得到一个数字的数位之和
    const getDigitSum = (num) => {
        let sum = 0;
        while (num) {
          sum += num % 10;
          num = Math.floor(num / 10);
        }
        return sum;
    };
    
    const dfs = (row, col, visited) => {
        // 判断机器人能否进入坐标为row,col的方向
        if (
          row >= 0 &&
          row < m &&
          col >= 0 &&
          col < n &&
          !visited[row][col] &&
          getDigitSum(row) + getDigitSum(col) <= k
        ) {
          visited[row][col] = true;
          return (
            1 +
            dfs(row - 1, col, visited) +
            dfs(row, col - 1, visited) +
            dfs(row + 1, col, visited) +
            dfs(row, col + 1, visited)
          );
        }
        return 0;
    };
    if (m <= 0 || n <= 0 || k < 0) {
        return 0;
    }
    
    let visited = new Array(m).fill(false).map(() => new Array(n).fill(false));
    let count = dfs(0, 0, visited);
    
    return count;
};
```

### BFS

广度优先遍历 也是递归的一种

```js
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
    // 得到一个数字的数位之和
    const getDigitSum = (num) => {
        let sum = 0;
        while (num) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        return sum;
    };
    // 方向数组
    const dir = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];
    
    // 已经走过的坐标
    let set = { "0,0": true };
    // 将遍历的坐标队列，题意要求从[0,0]开始走
    let queue = [[0, 0]];
    // 遍历队列中的坐标
    while (queue.length) {
        // 移除队首坐标
        let [x, y] = queue.shift();
        // 遍历方向 有4个方向
        for (let i = 0; i < 4; i++) {
            let offsetX = x + dir[i][0];
            let offsetY = y + dir[i][1];
            let objKey = [offsetX, offsetY].join(",");
            // 临界值判断
            if (
                offsetX < 0 ||
                offsetX >= m ||
                offsetY < 0 ||
                offsetY >= n ||
                getDigitSum(offsetX) + getDigitSum(offsetY) > k ||
                set[objKey]
            ) {
                continue;
            }
            
            // 走过的格子就不再纳入统计
            set[objKey] = true;
            // 将该坐标加入队列（因为这个坐标的四周没有走过，需要纳入下次的遍历）
            queue.push([offsetX, offsetY]);
        }
    }
    
    // 走过坐标的个数就是可以到达的格子数
    return Object.keys(set).length;
};
```

