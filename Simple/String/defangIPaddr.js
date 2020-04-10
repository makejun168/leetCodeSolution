// 1[.]1[.]1[.]1
// ... 替换成 [.]

/**
 * @param {string} address
 * @return {string}
 */

// /g 表示 全局匹配 global
var defangIPaddr = function(address) {
  return address.replace(/\./g, '[.]');
};