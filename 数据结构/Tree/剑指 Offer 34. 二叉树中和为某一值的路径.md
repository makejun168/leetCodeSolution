给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点 到 叶子节点 路径总和等于给定目标和的路径。

叶子节点 是指没有子节点的节点。


```
输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
输出：[[5,4,11,2],[5,8,4,5]]
```

```
输入：root = [1,2,3], targetSum = 5
输出：[]
```

### 二叉树搜索

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
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
    if (root === null) return [];
    const res = [];
    
    const dfs = (root, sum, path) => {
        // 到了叶子节点并且当前节点的值跟剩余sum相等，则推入结果集中
        if (root.val === sum && !root.left && !root.right) {
            res.push(path);
        }+
        
        // 路径中加入当前节点的值
        path.push(root.val);
        
        // 递归的去左右子树当中查找路径
        if (root.left) dfs(root.left, sum - root.val, path.slice());
        if (root.right) dfs(root.right, sum - root.val, path.slice());
        
    };
    
    dfs(root, sum, []);
    return res;
};
```