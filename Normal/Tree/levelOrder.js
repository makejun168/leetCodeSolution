/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let result = [];
    if (!root) {
        return result;
    }
    let dfs = function (node, level) {
        if (result.length === level) {
            result.push([]);
        }
        result[level].push(node.val);
        if (node.left) {
            dfs(node.left, level + 1)
        }
        if (node.right) {
            dfs(node.right, level + 1)
        }
    }
    dfs(root, 0);
    return result;
};