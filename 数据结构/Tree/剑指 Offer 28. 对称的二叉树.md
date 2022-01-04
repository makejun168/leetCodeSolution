请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

     1
    / \
    2  2
    / \ / \
    3 4 4 3

但是下面这个 [1, 2, 2, null, 3, null, 3] 则不是镜像对称的:

    1
    / \
    2  2
    \  \
    3   3


示例 1：

```
输入：root = [1,2,2,3,4,4,3]
输出：true
```

示例 2：

```
输入：root = [1,2,2,null,3,null,3]
输出：false
```

### 解法一 

* 递归
* 二叉树永远关注的 只有 left right 还有判断 null 的情况
* 处理好最简单的 一套逻辑 然后进行递归就可以了

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    var isMirror = function (left, right) {
        if (left === null && right === null) {
            return true
        } else if (left === null && right !== null) {
            return false
        } else if (left !== null && right === null) {
            return false
        }
        
        if (left.val !== right.val) {
            return false
        }
        
        let ret1 = isMirror(left.left, right.right)
        let ret2 = isMirror(left.right, right.left)
        return ret1 && ret2;
    }
    
    if (root === null) {
        return true
    }
    return isMirror(root.left, root.right);
};

```