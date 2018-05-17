// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    if(nums.length===0){
        return []
    }
    if(k===0){
        return nums
    }
    var flag = 1;
    var renderFun = function(arr){
        var originArr = arr.slice();
        var resArr = [];
        for(let i in originArr){
            if(i==0){
                resArr.push(originArr[originArr.length]);
            }
        }
        console.log(resArr);
        // if (flag===k){
        //     return arr
        // }
        // flag++;
        // return renderFun(resArr)
    }
    renderFun(nums)
};

var arr = [1, 2, 3, 4, 5, 6, 7];
console.log(rotate(arr));