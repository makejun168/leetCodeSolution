/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// 递归做法
var inOrderTraversal = function(root) {
  let result = [];
  let dfs = function(node) {
    if (node) {
      dfs(node.left);
      result.push(node.val);
      dfs(node.right);
    }
  }
  dfs(root);
  return result;
};