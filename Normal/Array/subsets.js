/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsets = function(nums) {
    let n = nums.length;
    let tmpPath = [];
    let res = [];
    let backtrack = (tmpPath, start) => {
        res.push(tmpPath);
        for(let i = start; i < n; i++) {
           tmpPath.push(nums[i]);
           backtrack(tmpPath.slice(), i + 1);
           tmpPath.pop();
       }
    }
    backtrack(tmpPath, 0);
    return res;
};


var subsets = function(nums) {
    var result = [];
    var subsets = [];
    var index = 0;
    var len = nums.length;
    function combinate(subsets, index){
         // terminator
        if (index === len) {
            result.push(subsets)
            return;
        }
        // process
        combinate(subsets, index+1);
        subsets.push(nums[index]);
        combinate(subsets.slice(0), index+1);
        // reverse states
        subsets.pop();

        //或
        // process
        // combinate(subsets.slice(0),index+1);
        // subsets.push(nums[index]);
        // combinate(subsets.slice(0),index+1);
    }
    combinate(subsets,0);
    return result;
};

console.log(subsets([1,2,3]));