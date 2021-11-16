/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let targetArr = s.split('');
    let n = 0;
    let nums = 0;
    for (let i = 0; i < targetArr.length; i ++) {
        if (targetArr[i] === 'R') {
            n++
        } else {
            n--
        }
        if (n === 0) {
            nums++;
        }
    }
    return nums;
};


balancedStringSplit('RLRRLLRLRL');
