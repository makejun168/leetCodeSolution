/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} K
 * @return {number}
 */

var mincostToHireWorkers = function(quality, wage, K) {
  let minNum = 0;
  // 获取 所有的组合形式
  let total = [];
  for (let i = 0; i < quality.length; i++) {
    let rest = quality.slice(i + 1);
    console.log(res);
    for (let j = 0; j < rest.length; j++) {
      let arr = [];
      arr.push(quality);
    }
  }
  // 遍历组合 查询出最优解法
  // 返回最优解法
  return minNum
};

let quality = [1, 2, 3, 4], wage = [70,50,30], K = 3;

mincostToHireWorkers(quality, wage, K);
