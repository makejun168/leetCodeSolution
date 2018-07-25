// 在二维数组grid中，grid[i][j]代表位于某处的建筑物的高度。 
// 我们被允许增加任何数量（不同建筑物的数量可能不同）的建筑物的高度。 
// 高度 0 也被认为是建筑物。
// 最后，从新数组的所有四个方向（即顶部，底部，左侧和右侧）观看的“天际线”必须与原始数组的天际线相同。 
// 城市的天际线是从远处观看时，由所有建筑物形成的矩形的外部轮廓。 请看下面的例子。
// 建筑物高度可以增加的最大总和是多少？

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
    let totalHeight = 0;//定义总共可以增加的高度
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            let currentX = 0;
            let currentY = 0;
            for (var z = j + 1; z < grid[i].length; z++) {
                if(grid[i][j]){

                }else{

                }
            }
        }
    }
    return totalHeight
};

var testArr = [
    [3, 0, 8, 4],
    [2, 4, 5, 7],
    [9, 2, 6, 3],
    [0, 3, 1, 0]
];
maxIncreaseKeepingSkyline(testArr);