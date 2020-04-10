/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    if(nums.length===0){
        return false
    }
    let hash = {};
    for(let item of nums){
        if(hash[item]===true){
            return true
        }
        hash[item] = true;
    }
    return false
};