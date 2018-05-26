/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {
    //遍历转化为数组
    let targetArr1 = [];
    // let resArr = [];
    // let longArr = [];
    // let shortArr = [];
    // if (t1.length > t2.length) {
    //     longArr = t1;
    //     shortArr = t2;
    // } else {
    //     longArr = t2;
    //     shortArr = t1
    // }

    // for (let i = 0; i < longArr.length; i++) {
    //     let merge = null;
    //     if (!shortArr[i]) {
    //         merge = longArr[i];
    //     } else {
    //         merge = longArr[i] + shortArr[i];
    //     }
    //     resArr.push(merge)
    // }
    // return resArr
};
var arr1 = [1, 3, 2, 5]
var arr2 = [2, 1, 3, null, 4, null, 7]
let res = mergeTrees(arr1, arr2);
console.log(res);