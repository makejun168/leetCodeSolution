// 给定一个二进制矩阵 A，我们想先水平翻转图像，然后反转图像并返回结果。
// 水平翻转图片就是将图片的每一行都进行翻转，即逆序。例如，水平翻转[1, 1, 0] 的结果是[0, 1, 1]。
// 反转图片的意思是图片中的 0 全部被 1 替换， 1 全部被 0 替换。例如，反转[0, 1, 1] 的结果是[1, 0, 0]。
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function (A) {
    if (A.length === 0) {
        return [];
    }
    let resArr = [];
    for (let childArr of A) {
        childArr = childArr.reverse();
        let currentArr = []
        for (let item of childArr) {
            if (item === 0) {
                currentArr.push(1)
            } else {
                currentArr.push(0);
            }
        }
        resArr.push(currentArr)
    }
    console.log(resArr);
    return resArr
};

var arr = [[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]];
flipAndInvertImage(arr);