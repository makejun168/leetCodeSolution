给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一棵高度平衡二叉树定义为：

> 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。


* 将二叉树想象为 root left right 只有三个节点
* 剩下的交给递归完成

### 递归

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    return isBST(root).isB;
};

function isBST(root) {
    if (root === null) {
        return new ReturnNode(0, true);
    }
    // 不是平横的情况

    let left = isBST(root.left);
    let right = isBST(root.right);

    if(left.isB == false || right.isB == false){
        return new ReturnNode(0, false);
    }

    if(Math.abs(left.depth - right.depth) > 1){
        return new ReturnNode(0, false);
    }
    
    //不满足上面3种情况，说明平衡了，树的深度为左右俩子树最大深度 + 1
    return new ReturnNode(Math.max(left.depth, right.depth) + 1, true);
}

function ReturnNode (depth, isB){
    this.isB = isB;
    this.depth = depth;
}
```