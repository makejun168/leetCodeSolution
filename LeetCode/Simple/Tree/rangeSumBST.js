/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */


var rangeSumBST = function(root, L, R) {
    let result = 0
    function searchTree(root) {
        if(root === null){
            return
        }
        if (root.val >= L && root.val <= R) {
            result += root.val
        }
        searchTree(root.left);
        searchTree(root.right);
    }
    searchTree(root)
    return result
};
