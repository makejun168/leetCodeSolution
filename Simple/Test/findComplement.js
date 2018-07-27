// 给定一个正整数，输出它的补数。补数是对该数的二进制表示取反。
// 注意:
// 给定的整数保证在32位带符号整数的范围内。
// 你可以假定二进制数不包含前导零位。

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
    var second = num.toString(2);
    var result = '';
    if(!second.length)return
    for (let item of second){
        if(item=='1'){
            result = result + '0'
        } else {
            result = result + '1'
        }
    }
    return parseInt(result,2);
};

// findComplement(5);
console.log(findComplement(5));