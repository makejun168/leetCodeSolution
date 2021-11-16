/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let res = parseInt(Math.abs(x).toString().split('').reverse().join(''));
    //判断数字大于 0 或者 小于 0
    if (res > Math.pow(2, 31) - 1){
        return 0
    }
    if(x>0){
        return res
    } else{
        return -res;
    }
};

reverse(-123);