/**
 * @param {string} s
 * @return {string}
 */
// i.charCodeAt() 105 96 + 9
// j.charCodeAt() 106 96 + 10

var freqAlphabets = function (s) {
  let result = "";
  const { length } = s;
  for (let i = 0, j; i < length; i++) {
    j = i + 2;
    if (s[j] === "#") {
      let value = +`${s[i]}${s[j - 1]}` + 96;
      result += String.fromCharCode(value);
      // 下标位移
      i = j;
    } else {
      // 正常情况
      // + s[i] 保证数字为 Number类型 小技巧
      result += String.fromCharCode(+s[i] + 96);
    }
  }
  return result;
};

freqAlphabets("10#11#12");
