let names = [
  "leo",
  "周沫",
  "黄世鹏",
  "王浩然",
  "胡和君",
  "刘汉bin",
  "郑",
  "张",
];
let score = [1, 2, 3, 4, 5, 6, 7, 10];
let place = [1, 2, 3, 4];

const combine = function (...chunks) {
  let res = [];
  let helper = function (idx, prev) {
    let chunk = chunks[idx];
    let isLast = idx === chunks.length - 1;
    for (let val of chunk) {
      let cur = prev.concat(val);
      if (isLast) {
        res.push(cur);
      } else {
        helper(idx + 1, cur);
      }
    }
  };
  helper(0, []);
  return res;
};

console.log(combine(names, score, place));
