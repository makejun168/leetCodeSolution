输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。

如果是则返回 true，否则返回 false。假设输入的数组的任意两个数字都互不相同。

右边的数字比左边的要大，最右边的子树 最大 最左边的子树最小
满足 左小右大

后序遍历意思是 左右根节点的顺序进行 遍历

```
输入: [1,6,3,2,5]
输出: false
```

```js
/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function(postorder) {
    var recur = function (postorder, i , j) {
        if (i >= j) return true;
        let p = i;
        while (postorder[p] < postorder[j]) p++;
        let m = p;
        while (postorder[p] > postorder[j]) p++;
        return p == j && recur(postorder, i, m - 1) && recur(postorder, m, j - 1);
    }
    
    return recur(postorder, 0, postorder.length - 1)
};
```

### 单调栈遍历

```js
var verifyPostorder = function(postorder) {
    let stack = [];
    let root = Number.MAX_VALUE;
    for (let i = postorder.length - 1; i >= 0; i--) {
        if (postorder[i] > root) return false;
        while (!stack.length && stack.slice(-1) > postorder[i]) {
            root = stack.pop();
        }
        stack.push(postorder[i])
    }
    return true;
};
```