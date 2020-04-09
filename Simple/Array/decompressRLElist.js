/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let resultArr = [];
    for (let i = 0; i < nums.length; i+=2 ) {
        Array.from(Array(nums[i]), () => nums[i + 1])
        resultArr.push(...Array.from(Array(nums[i]), () => nums[i + 1]))
    }
    return resultArr;
};

decompressRLElist([1,1,2,3]);
