/**
 * @param {number} num
 * @return {number}
 */

var maximum69Number  = function(num) {
  let str = String(num).split('');
  let maxArr = [];
  maxArr.push(str);
  for (let i = 0; i < str.length; i++) {
    let current = String(num).split('');
    let item = str[i] === '6' ? '9' : '6';
    current.splice(i, 1, item);
    maxArr.push(current);
  }
  let resArr = Array.from(maxArr, (item) => Number(item.join('')));
  return Math.max(...resArr);
};

maximum69Number(9669);
