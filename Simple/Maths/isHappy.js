/**
 * @param {number} n
 * @return {boolean}
 */

var isHappy = function (n) {
  let totalArr = [];
  var isHappyNum = function (n) {
    let total = 0;
    let currentNumArr = (n + "").split("");
    if (currentNumArr.length >= 2) {
      currentNumArr.forEach((item) => {
        total += Math.pow(+item, 2);
      });
    } else {
      total += Math.pow(n, 2);
    }
    if (total === 1) {
      return true;
    } else if (totalArr.indexOf(total) !== -1) {
      return false;
    } else {
      totalArr.push(total);
      return isHappyNum(total);
    }
  };
  return isHappyNum(n);
};
