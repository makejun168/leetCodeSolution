// #1 两数之和
// 描述：给定一个整数数组和一个值target，求两个下标i、j，使得a[i] + a[j] = target，返回下标。
/*
/**
 * @param {number[]} arr
 * @param {number} target
 * @return {result[]}
 */
var twoSum = function (arr, target) {
    if (!arr || !arr.length) return
    let result = []
    for (var i = 0, len = arr.length; i < len; i++) {
        for (var j = i + 1; j < arr.length; j++) {

            if (arr[i] + arr[j] == target) {
                result.push(i);
                result.push(j);
                break;
            }
        }
    }
    return result
};

var target = 0;
var arr = [0,4,3,0];
var result = twoSum(target,arr);
// console.log(result)