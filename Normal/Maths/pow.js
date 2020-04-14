/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  let long = n;
  if (n < 0) {
    x = 1 / x;
    long = -long;
  }
  let ans = 1;
  for (let i = 0; i < long; i++) {
    ans = ans * x
  }
  return ans;
};
