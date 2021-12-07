请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

例如:
给定二叉树: [3,9,20,null,null,15,7],

```
    3
   / \
  9  20
    /  \
   15   7
```

返回其层次遍历结果：

```
[
  [3],
  [20,9],
  [15,7]
]
```


### 广度优先遍历

### 复杂度分析

* 时间复杂度 O(N)O(N) ： NN 为二叉树的节点数量，即 BFS 需循环 NN 次，占用 O(N)O(N) ；双端队列的队首和队尾的添加和删除操作的时间复杂度均为 O(1)O(1) 。
* 空间复杂度 O(N)O(N) ： 最差情况下，即当树为满二叉树时，最多有 N/2N/2 个树节点 同时 在 deque 中，使用 O(N)O(N) 大小的额外空间。

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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root === null) {
        return [];
    }
    let queue = [root];
    let res = [];

    while (queue.length > 0) {
        let len = queue.length;
        let tmp = [];
        while (len--) {
            const node = queue.shift();
            if (res % 2 === 0) {
                temp.push(node.val)
            } else {
                // 在前面放进去
                temp.unshift(node.val);
            }
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        res.push(tmp);
    }
    return res;
};
```