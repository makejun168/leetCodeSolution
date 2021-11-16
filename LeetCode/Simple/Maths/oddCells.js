/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(n, m, indices) {
  let target = Array.from(Array(n), () => Array(m).fill(0));
  for (let i = 0; i < indices.length; i++ ) {
    for (let j = 0; j < target.length; j++) {
      for (let k = 0; k < target[j].length; k++) {
        if (j === indices[i][0]) {
          target[j][k] += 1;
        }
        if (k === indices[i][1]) {
          target[j][k] += 1;
        }
      }
    }
  }
  let nums = 0;
  for (let j = 0; j < target.length; j++) {
    for (let k = 0; k < target[j].length; k++) {
      if (target[j][k] % 2 !== 0) {
        nums++;
      }
    }
  }
  console.log(nums);
  return nums;
};

oddCells(2, 3, [[0,1],[1,1]]);
