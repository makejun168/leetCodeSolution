/**
 * Definition for a binary tree root.
 * function Treeroot(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

 // 学习剪枝
var isSymmetric = function(root) {
  if (root === null) {
    return true;
  }
  let isSame = true;
  let leftArr = [root.val];
  let rightArr = [root.val];
  var getTree = function(root, res, direction) {
    if (!root) {
      res.push(null);
      return res;
    }
    // 存入数组比较
    res.push(root.val);
    if (direction === 'left') {
      getTree(root.left, res, 'left'); // 先递归左子树 再递归右子树
      getTree(root.right, res, 'right');
    } else {
      getTree(root.right, res, 'right');
      getTree(root.left, res, 'left');
    }
    return res;
  }
  getTree(root.right, rightArr, 'right');
  getTree(root.left, leftArr, 'left');
  // console.log(leftArr);
  // console.log(rightArr);
  for (let i = 0; i < leftArr.length; i++) {
    if (leftArr[i] !== rightArr[i]) {
      isSame = false;
    }
  }
  return isSame;
};