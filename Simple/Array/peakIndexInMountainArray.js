/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function (A) {
    let maxItem = Math.max.apply(null, A);
    let res = null;
    A.map((item, index) => {
        if (maxItem === item) {
            res = index;
        }
    })
    return res
};

var targetArr = [1, 2, 3, 4, 5, 4, 3, 2, 1];
var res = peakIndexInMountainArray(targetArr);
console.log(res);