/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

var luckyNumbers  = function(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let standardArr = matrix[i];
      let verticalArr = [];
      matrix.forEach((current) => {
        verticalArr.push(
          ...current.filter((item, index) => index === j && item)
        );
      });
      if (matrix[i][j] === Math.min(...standardArr) && matrix[i][j] === Math.max(...verticalArr)) {
        return [matrix[i][j]]
      }
    }
  }
  return [];
};

let matrix = [[36376,85652,21002,4510],[68246,64237,42962,9974],[32768,97721,47338,5841],[55103,18179,79062,46542]];
luckyNumbers(matrix);
