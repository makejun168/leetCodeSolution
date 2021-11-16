/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let strNum = String(n).split('');
    let multiplication = 0;
    let totalNum = 0;
    multiplication = strNum.reduce((total, current) => {
        return total * Number(current)
    });
    console.log(multiplication)
    totalNum = strNum.reduce((total, current) => {
        return  Number(total) + Number(current)
    })
    console.log(totalNum)
    return multiplication - totalNum
};

subtractProductAndSum(234)
