/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let resultArr = [];
    for (let i = 0; i < nums.length; i+=2 ) {
        // 想要转换成数组的伪数组对象或可迭代对象。
        // 新数组中的每个元素会执行该回调函数
        Array.from(Array(nums[i]), () => nums[i + 1])
        resultArr.push(...Array.from(Array(nums[i]), () => nums[i + 1]))
    }
    return resultArr;
};

decompressRLElist([1,1,2,3]);
