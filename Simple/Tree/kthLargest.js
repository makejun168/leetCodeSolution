/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

var kthLargest = function (root, k) {
  // 二叉搜索树的逆中序遍历
  if (!root) return null;

  let stack = [],
    count = 0;

  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.right;
    } else {
      let cur = stack.pop();
      if (++count == k) {
        return cur.val;
      }
      root = cur.left;
    }
  }
  return null;
};

var kthLargest = function (root, k) {
  if (root == null) {
    return;
  }
  let res = [];
  function help(root) {
    if (!root) {
      return [];
    }
    if (root.right) {
      help(root.right);
    }
    res.push(root.val);
    if (root.left) {
      help(root.left);
    }
  }
  help(root);
  return res[k - 1];
};
