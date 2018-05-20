/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let resArr = [];
    let orginArr = [];
    for(let item of nums){
        let currentArr = [];
        currentArr.push(item);
        resArr.push(currentArr);
    }
    for(let item of nums){
        
    }
    resArr.push(orginArr);
    resArr.push(nums);
    console.log(resArr);
};

var nums = [1, 2, 3];
subsets(nums);