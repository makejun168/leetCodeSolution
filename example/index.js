/**
 * @param {number} n
 * @return {number}
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
