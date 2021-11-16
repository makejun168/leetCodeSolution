/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
    var wordsArr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let res = 0;
    //判断传入的字符串的长度
    let strLen = s.length;
    for(let i in s){
        let currentIndex = wordsArr.indexOf(s[i]);
        res += (currentIndex + 1) * Math.pow(26, strLen-1);
        strLen--
    }
    console.log(res)
    return res
};

var str = "AB";
console.log(titleToNumber(str));