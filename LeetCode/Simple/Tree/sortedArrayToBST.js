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
var sortedArrayToBST = function(nums) {
  if (!nums.length) {
    return null;
  }
  let root = new TreeNode();
  let middleIdx = Math.floor((nums.length) / 2);
  root.val = nums[middleIdx];
  root.left = sortedArrayToBST(nums.slice(0, middleIdx));
  root.right = sortedArrayToBST(nums.slice(middleIdx + 1));
  return root;
};

var data = [9,12,14,17,19,23,50,54,67,72,76];
sortedArrayToBST(data);
