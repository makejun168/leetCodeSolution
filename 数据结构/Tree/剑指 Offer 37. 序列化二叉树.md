请实现两个函数，分别用来序列化和反序列化二叉树。

你需要设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。

提示：输入输出格式与 LeetCode 目前使用的方式一致，详情请参阅 LeetCode 序列化二叉树的格式。

你并非必须采取这种方式，你也可以采用其他的方法解决这个问题。

```
输入：root = [1,2,3,null,null,4,5]
输出：[1,2,3,null,null,4,5]
```

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    // 处理边界值
    if (root === null) return '[]';
    let queue = [root], res = [];
    while (queue.length) {
        // 获取当前的 node
        let node = queue.shift();
        if (node !== null) {
            // 前序遍历
            queue.push(node.left);
            queue.push(node.right);
            res.push(node.val);
        } else {
            res.push(null);
        }
    }
    // 转化为字符串 序列化
    return JSON.stringify(res);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    // 对应上面的逻辑判断
    if (data === '[]') return null;
    let arr = JSON.parse(data); // 序列化数组
    let root = new TreeNode(arr[0]);
    let queue = [root], i = 1;
    
    while (queue.length && i < arr.length) {
        // 同样是前序遍历
        let node = queue.shift();
        if (arr[i] != null) {
            // 重建 树结构
            node.left = new TreeNode(arr[i])
            queue.push(node.left)
        }
        i++;
        if (arr[i] != null) {
            // 重建 树结构
            node.right = new TreeNode(arr[i])
            queue.push(node.right)
        }
        i++;
    }
    
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
```