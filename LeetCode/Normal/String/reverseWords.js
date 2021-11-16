/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s.split(' ').filter((item) => item !== '' && item).reverse().join(' ')
};

reverseWords('a good   example');