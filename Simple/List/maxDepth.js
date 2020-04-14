/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (root === null) {
    return null;
  }
  let left = maxDepth(root.left);
  let right = maxDepth(root.right);
  // 这里的 + 1 代表自身的当前层数节点
  return Math.max(right, left) + 1;
};