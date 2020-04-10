/**
 * @param {string} s
 * @return {string}
 */

// 匹配前面的子表达式零次或多次。要匹配 * 字符，请使用 \*。
var replaceSpace = function(s) {
  return s.replace(/\s/g,"%20");
};