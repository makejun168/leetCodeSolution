// 给定一个偶数长度的数组，其中不同的数字代表着不同种类的糖果，
// 每一个数字代表一个糖果。你需要把这些糖果平均分给一个弟弟和一个妹妹。
// 返回妹妹可以获得的最大糖果的种类数。

/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function (candies) {
    if (candies.length === 0) {
        return 0
    }
    
    //查看有多少个种类的糖果
    let hash = new Object(), resArr = [], maxRes = Math.floor(candies.length / 2);
    for (let item of candies) {
        if (!hash[item]) {
            hash[item] = true;
        }
    }
    for (let i in hash) {
        resArr.push(hash[i]);
    }
    if (resArr.length > maxRes) {
        return maxRes
    } else {
        return resArr.length
    }
};

var testArr = [1, 1, 2, 2, 3, 3];
console.log(distributeCandies(testArr));
