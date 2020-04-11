/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

// 二叉树的特性 适合使用递增

var mirrorTree = function(root) {
    if(!root) return null
    let left=root.left
    root.left=mirrorTree(root.right)
    root.right=mirrorTree(left)
    return root
};
