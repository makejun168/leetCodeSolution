/**
 * @param {number} n
 * @return {*[]}
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

// const reversePairs = arr => {
//     let count = 0;
//     // arr为一个值直接返回
//     if (arr.length < 2) return arr;
//     // 长度为2排序返回
//     if (arr.length === 2) {
//         if (arr[0] <= arr[1]) return arr;
//         // 记录逆序
//         count++;
//         return [arr[1], arr[0]];
//     }
//     // 获取二分位置
//     const mid = arr.length >> 1;
//     // 将左边部分排序
//     const left = mergeSort(arr.slice(0, mid));
//     // 将右边部分排序
//     const right = mergeSort(arr.slice(mid));
//     // 保存结果
//     const res = [];
//     // 两组的起始指针位置
//     let [leftIndex, rightIndex] = [0, 0];
//     // 循环直到两边遍历完
//     while (leftIndex < left.length || rightIndex < right.length) {
//         // left结束
//         if (leftIndex >= left.length) {
//             // 将剩余right添加到res
//             res.push.apply(res, right.slice(rightIndex));
//             // 跳出循环
//             break;
//         }
//         // right结束
//         if (rightIndex >= right.length) {
//             // 将剩余left添加到res
//             res.push.apply(res, left.slice(leftIndex));
//             // 跳出循环
//             break;
//         }
//         // 左值小
//         if (left[leftIndex] <= right[rightIndex]) {
//             // 将左值push
//             res.push(left[leftIndex]);
//             // 左下标右移
//             leftIndex++;
//         } else {
//             //右值小
//             // 将右值push
//             res.push(right[rightIndex]);
//             // 右下标右移
//             rightIndex++;
//             // 记录逆序(因为left是有序的，所以leftIndex开始都存在逆序)
//             count += left.length - leftIndex;
//         }
//     }
//     console.log(count)
//     // 返回有序数组
//     return count;
// };
//
// reversePairs([7,5,6,4])

// [0, 1, 2, 3, 4]
// var lastRemaining = function(n, m) {
//
//     var f = function (n, m){
//         if (n == 1) {
//             return 0;
//         }
//         let x = f(n - 1, m);
//         return (m + x) % n;
//     }
//     return f(n, m);
// };
//
// console.log(lastRemaining(5, 3))

// var twoSum = function(nums, target) {
//     let result = [];
//     let hash = new Map();
//     hash.set(nums[0], 0)
//
//     for (let i = 1; i < nums.length; i++) {
//         if (hash.has(target - nums[i])) {
//             result = [hash.get(target- nums[i]), i]
//         }
//         hash.set(nums[i], i);
//     }
//     console.log(result)
//     return result;
// };

// twoSum([3,2,4], 6)

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var addTwoNumbers = function(l1, l2) {
    let node = new ListNode(0); // 存放 ListNode

    let head = node;
    let n = 0;

    while (l1 !== null || l2 !== null) {
        let num = n;
        if (l1 != null) {
            num += l1.val;
            l1 = l1.next;
        }
        if (l2 != null) {
            num += l2.val;
            l2 = l2.next;
        }
        node.next = new ListNode(num % 10);
        n = Math.floor(num / 10);
        node = node.next;
    }

    if (n > 0) {
        node.next = new ListNode(n);
    }

    return head.next;
};


