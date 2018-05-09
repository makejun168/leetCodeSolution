// 请编写一个函数，其功能是将输入的字符串反转过来。
// split将字符串转化为数组 reverse 数组翻转  join再将数组转化为字符串
/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function (s) {
    return s.split('').reverse().join('');
};

console.log(reverseString('abc'))
