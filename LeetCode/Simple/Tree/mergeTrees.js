/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */

// 递归 合并两个二叉树
var mergeTrees = function(t1, t2) {
    // 合并两个节点
    // 当t1没有的 时候直接返回t2
    // 同理
    if (!t1) {
        return t2;
    }
    if (!t2) {
        return t1;
    }

    // 递归走逻辑
    let root = new TreeNode();
    root.val = t1.val + t2.val;
    root.left = mergeTrees(t1.left, t2.left);
    root.right = mergeTrees(t1.right, t2.right);
    return root;
};
