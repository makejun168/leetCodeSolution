/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function(astr) {
  let originLen = astr.length;
  let obj = {
    count: 0
  };
  for (let item of astr) {
    if (!obj[item]) {
      obj.count++;
      obj[item] = true;
    }
  }
  // console.log(obj);
  // let target = new Map(astr);
  // console.log(target);
  // console.log(originLen);
  return obj.count !== originLen ? false : true;
};

isUnique('leetcode');
