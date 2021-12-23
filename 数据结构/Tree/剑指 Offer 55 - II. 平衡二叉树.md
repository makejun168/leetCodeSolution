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

### 方法二 

深度计算遍历

```js
var isBalanced = function (root) {
    if (root === null) return true;
    
    // 分别计算左子树 右子树高度
    let left = depth(root.left);
    let right = depth(root.right);
    
    // 左右子树高度不能超过 1 并且 他的 两个子树 也必须是 平衡二叉树
    return Math.abs(left - right) <= 1 && isBalanced(root.left) && isBalanced(root.right);
}

var depth = function (root) {
    if (root === null) {
        return 0;
    }
    // 递归左右
    return Math.max(depth(root.left), depth(root.right)) + 1;
}
```