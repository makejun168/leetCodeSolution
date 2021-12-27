输入两棵二叉树A和B，判断 B是不是 A的子结构。(约定空树不是任意一个树的子结构)

B是A的子结构， 即 A中有出现和B相同的结构和节点值。

例如:
给定的树 A:

```
 3
/ \
4  5
/ \
1  2
给定的树 B：

 4
/
1
```

返回 true，因为 B 与 A 的一个子树拥有相同的结构和节点值。

```
输入：A = [1,2,3], B = [3,1]
输出：false
```

```
输入：A = [3,4,5,1,2], B = [4,1]
输出：true
```

### 递归实现

顺序是 前序遍历，利用队列存储

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
    if (B === null) return false;
    let nodeMap = {};
    let queueA = [A];
    
    var isSame = function (root, target) {
        if (root === target || target === null) return true;
        if (root === null || root.val !== target.val) return false;
        return isSame(root.left, target.left) && isSame(root.right, target.right);
    }
    
    // 遍历队列
    while (queueA.length > 0) {
        // 在队列A 中查找 第一个
        const current = queueA.shift();
        (nodeMap[current.val] || (nodeMap[current.val] = [])).push(current);
        if (current.left) queueA.push(current.left)
        if (current.right) queueA.push(current.right)
    }
    
    let condidate = nodeMap[B.val] || [];
    for(let i=0, len = condidate.length; i < len; i++) {
        if(isSame(condidate[i], B)) return true;
    }
    
    return false;
};
```

### 解题思路

若树 BB 是树 AA 的子结构，则子结构的根节点可能为树 AA 的任意一个节点。因此，判断树 BB 是否是树 AA 的子结构，需完成以下两步工作：

1. 先序遍历树 AA 中的每个节点 n_An ；（对应函数 isSubStructure(A, B)）
2. 判断树 AA 中 以 n_An A 为根节点的子树 是否包含树 BB 。（对应函数 recur(A, B)）

```
public boolean isSubStructure(TreeNode A, TreeNode B) {
    if(A == null || B == null) return false;
    return dfs(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
}

public boolean dfs(TreeNode A, TreeNode B){
    if(B == null) return true;
    if(A == null) return false;
    return A.val == B.val && dfs(A.left, B.left) && dfs(A.right, B.right);
}
```