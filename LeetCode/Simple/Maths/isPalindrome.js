/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let result = true;
    let curStrArr = ('' + x).split('');
    let reverseArr = ('' + x).split('').reverse();
    for (let i = 0; i < curStrArr.length; i++) {
        if (curStrArr[i] !== reverseArr[i]) {
            result = false
            break;
        }
    }
    return result;
};

// 巧妙方法
// 比如说121
// 121%10=1
// 121/10=12
// 1*10<12

// 12%10=2
// 1*10+2=12
// 12/10=1
// 1<12
// 已经处理了过半位数的数字
