/**
 * @param {number} n
 * @return {string}
 */

// Math.floor(Math.random()*(25 - 0 + 1))

var generateTheString = function(n) {
  let total = 'abcdefghijklmnopqrstuvwxyz';
  let letterArr = total.split('');
  if (n % 2 === 0) {
    return letterArr[0].repeat(n - 1 ) + 'b';
  } else {
    return letterArr[1].repeat(n);
  }
};
