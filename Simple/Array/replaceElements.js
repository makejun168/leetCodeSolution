/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    let target = Math.max(...arr.slice(i + 1));
    resultArr.push(target);
  }
  resultArr.splice(-1, 1, -1);
  return resultArr;
};

// 更优解法
// var replaceElements = function(arr) {
//   let max = -1, res = [];

//   for (let i = arr.length - 1; i >= 0; i--) {
//       res[i] = max;
//       max = arr[i] > max ? arr[i] : max;
//   }
//   return res;
// };

replaceElements([17, 18, 5, 4, 6, 1]);
