// 给定一个包含 0 和 1 的二维网格地图，
// 其中 1 表示陆地 0 表示水域。
// 网格中的格子水平和垂直方向相连（对角线方向不相连）。
// 整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。
// 岛屿中没有“湖”（“湖” 指水域在岛屿内部且不和岛屿周围的水相连）。
// 格子是边长为 1 的正方形。
// 网格为长方形，且宽度和高度均不超过 100 。
// 计算这个岛屿的周长。

// [
//     [0, 1, 0, 0],
//     [1, 1, 1, 0],
//     [0, 1, 0, 0],
//     [1, 1, 0, 0]
// ]

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    let totalLen = 0;
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            if (grid[i][j]) {
                //判断下标是否越界
                let beforeColNum = i - 1;
                let afterColNum = i + 1;
                let beforeRowNum = j - 1;
                let afterRpwNum = j + 1;

                if (beforeColNum < 0) {
                    totalLen++;
                } else {
                    if (!grid[beforeColNum][j]) {
                        totalLen++;
                    }
                }

                if (afterColNum > grid.length - 1) {
                    totalLen++;
                } else {
                    if (!grid[afterColNum][j]) {
                        totalLen++;
                    }
                }

                if (beforeRowNum < 0) {
                    totalLen++;
                } else {
                    if (!grid[i][beforeRowNum]) {
                        totalLen++;
                    }
                }

                if (afterRpwNum > grid[i].length - 1) {
                    totalLen++;
                } else {
                    if (!grid[i][afterRpwNum]) {
                        totalLen++;
                    }
                }
            }
        }
    }
    // console.log(totalLen);
    return totalLen;
};

var testArr = [
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0]
];
islandPerimeter(testArr);