/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
  var getMin = function (cur) {
    let result = 0;
    let current = cur;
    result += current;
    for (let i = 0; i < nums.length; i++) {
      result += nums[i];
      if (result <= 0) {
        isOk = false;
        break;
      }
    }
    if (!isOk) {
      getMin(cur + 1);
    } else {
      return current;
    }
  };
  let ta = getMin(1);
  console.log(ta);
  return ta;
};

// var minStartValue = function (nums) {
//   var sum = 0;
//   var small = nums[0];
//   for (var i = 0; i < nums.length; i++) {
//     sum += nums[i];
//     small = sum < small ? sum : small;
//   }
//   return 1 - small > 1 ? 1 - small : 1;
// };

minStartValue([-3, 2, -3, 4, 2]);
