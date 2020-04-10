/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
  let totalLen = Math.pow(10, n);
  let result = []
  for (let i = 1; i < totalLen; i++) {
    result.push(i);
  }
  return result
};

printNumbers(1);
