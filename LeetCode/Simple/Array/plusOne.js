// 给定一个非负整数组成的非空数组，在该数的基础上加一，返回一个新的数组。
// 最高位数字存放在数组的首位， 数组中每个元素只存储一个数字。
// 你可以假设除了整数 0 之外，这个整数不会以零开头

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // for (let i = 0; i < digits.length; i++) {
  //     if (i === digits.length - 1) {
  //         if (digits[i] + 1 === 10) {
  //             digits[i-1] = digits[i-1] + 1;
  //             digits[i] = 0;
  //         } else {
  //             digits[i] = digits[i]+1;
  //         }
  //     }
  // }
  // return digits
  let res = [];
  let resStr = digits.join("") + "";
  console.log(resStr);
  // let resArr = String((digits.join('')) + 1).split('');
  // // console.log(resArr);
  // let res = [];
  // for (let item of resArr) {
  //     res.push(Math.floor(item));
  // }
  // return res
};
let testArr = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
console.log(plusOne(testArr));
