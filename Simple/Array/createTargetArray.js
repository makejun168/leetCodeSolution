/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let target = [];
    for (let i = 0; i < index.length; i++) {
        if (target[index[i]] == undefined) {
            target[index[i]] = nums[i];
        } else {
            // 开始的位置，删除的个数，插入的元素
            target.splice(index[i], 0, nums[i])
        }
    }
    return target;
};

createTargetArray([0,1,2,3,4], [0,1,2,2,1]);
