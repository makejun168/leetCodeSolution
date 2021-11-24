/**
 * @param {number} n
 * @return {boolean}
 */
//  var nthUglyNumber = function(n) {
//      if (n < 1) return 0
//      let count = 1;
//      let uglyList = [1];
//      let twoPointer = 0;
//      let threePointer = 0;
//      let fivePointer = 0;
//      while (count != n) {
//          let minValue = Math.min(2*uglyList[twoPointer], 3*uglyList[threePointer], 5*uglyList[fivePointer]); // 获取当前需要移动的指针
//          uglyList.push(minValue);
//          count+=1; // 目标向前移动一位
//          if (minValue === 2 * uglyList[twoPointer]) {
//              twoPointer+=1
//          }
//          if (minValue === 3 * uglyList[threePointer]) {
//             threePointer+=1
//         }
//         if (minValue === 5 * uglyList[fivePointer]) {
//             fivePointer+=1
//         }
//      }
//      return uglyList[count - 1];
// };
//
// nthUglyNumber(12)


// var search = function(nums, target) {
//     let result = 0;
//     let i = 0, j = nums.length - 1;
//     while (i < j) {
//         let mid = Math.floor((i + j) / 2);
//         // 判断当前 Target 是在 中位数的左边还是右边
//         if (nums[mid] <= target) {
//             i = mid + 1;
//         } else {
//             j = mid - 1;
//         }
//     }
//     console.log(i);
//     return i
// };


// var findNumberIn2DArray = function(matrix, target) {
//     if (!matrix.length) return false
//     let i = 0; // 下标
//     let row_count = matrix.length; // 行
//     let columns_count = matrix[0].length; // 列
//     let j = matrix[0].length - 1;
//
//     while (i < row_count && j >= 0) {
//         let value = matrix[i][j];
//         if (value === target) {
//             return true;
//         } else if (target < value) {
//             j -= 1; // 上一列
//         } else {
//             i += 1; // 下一行
//         }
//     }
//     return false;
// };
//
// findNumberIn2DArray([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 5)



// var twoSum = function(nums, target) {
//     let result = [];
//     let hash = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         if (hash.has(target - nums[i])) {
//             return [nums[i], target- nums[i]]
//         }
//         hash.set(nums[i], true)
//     }
//     return result;
// };
//
// console.log(twoSum([2,7,11,15], 9))


// var minArray = function(numbers) {
//     let i = 0;
//     let j = numbers.length - 1;
//     while (i < j) {
//         let middle = Math.floor((i + j) / 2);
//         if (numbers[middle] < numbers[j]) {
//             j = middle
//         } else if (numbers[middle] > numbers[j]) {
//             i = middle + 1;
//         } else {
//             j -= 1
//         }
//     }
//     console.log(numbers[i])
//     return numbers[i]; // 二分查找 最大位数的下标
// };
//
// minArray([3,4,5,1,2])


// var exchange = function(nums) {
//     let i = 0;
//     let j = nums.length - 1;
//
//     while (i < j) {
//         // 判断左边的指针是否为 偶数
//         if (nums[i] % 2 === 0 && nums[j] % 2 !== 0) {
//             nums[i] ^= nums[j];
//             nums[j] ^= nums[i];
//             nums[i] ^= nums[j]; // 交换位置
//
//             i += 1;
//             j -= 1;
//         } else if (nums[i] % 2 !== 0 && nums[j] % 2 === 0) {
//             i += 1;
//             j -= 1;
//         } else if (nums[i] % 2 !== 0 && nums[j] % 2 !== 0) {
//             i += 1;
//         } else {
//             j -= 1;
//         }
//     }
//
//     return nums;
// };
//
// exchange([2,1,4,3,5,6,2])

var reversePairs = function(nums) {
    let ans = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                let result = [nums[i], nums[j]];
                ans.push(result);
            } else {
                continue;
            }
        }
    }

    console.log(ans);
    return ans.length; // 逆序对的长度
};

reversePairs([7,5,6,4])



