/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let originArr = s.split(' ');
    let resArr = [];
    for (let words of originArr){
        let currentStr = words.split('').reverse().join('');
        resArr.push(currentStr)
    }
    return resArr.join(' ')
};

var str = "Let's take LeetCode contest";
console.log(reverseWords(str));