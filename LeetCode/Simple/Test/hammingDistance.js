// 两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。
// 给出两个整数 x 和 y，计算它们之间的汉明距离。

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    let xSec = x.toString(2);
    let ySec = y.toString(2);
    console.log(xSec);
    console.log(ySec);
};

var x = 1, y = 4;
hammingDistance(x,y);