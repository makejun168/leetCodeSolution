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
var convertBST = function (root) {
  let sum = 0;
  var getTree = function(root) {
    if (!root) {
      return null;
    }
    getTree(root.right);
    sum += root.val;
    root.val = sum;
    getTree(root.left);
  }
  getTree(root);
  return root;
};
