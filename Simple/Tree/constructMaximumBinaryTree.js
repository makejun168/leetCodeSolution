/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    if (nums.length === 0) {
        return null;
    }
    let max = nums.reduce((initVal, currVal) => {
        if (initVal < currVal) {
            initVal = currVal
        }
        return initVal
    }, 0);

    let targetIndex = nums.indexOf(max);
    console.log(targetIndex);

    let leftArr = nums.slice(0, targetIndex);
    let rightArr = nums.slice(targetIndex + 1);
    let root = new TreeNode();

    root.val = max;
    root.left = constructMaximumBinaryTree(leftArr);
    root.right = constructMaximumBinaryTree(rightArr);
    return root;
};

constructMaximumBinaryTree([3,2,1,6,0,5])


