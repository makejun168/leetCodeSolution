/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let totalArr = [];//定义二维数组
    let totalLen = Math.round(nums.length / 2);//定义最大值的长度
    for (var i = 0; i < nums.length; i++) {
        let currentArr = [];//定义存储可能
        currentArr.push(nums[i]);
        for (var j = i + 1; j < nums.length; j++) {
            if (j !== i + 1) {
                currentArr.push(nums[j]);
            }
        }
        console.log(currentArr);
        if (totalLen === currentArr.length) {
            totalArr.push(currentArr);
        }
    }
    // console.log(totalArr);
    let maxNum = 0;
    for (let itemArr of totalArr) {
        let currentNum = 0;
        for (item of itemArr) {
            currentNum += item;
        }
        if (maxNum < currentNum) {
            maxNum = currentNum;
        }
    }
    console.log(maxNum);
    return maxNum;
};

var testArr = [2, 1, 1, 2];
rob(testArr);