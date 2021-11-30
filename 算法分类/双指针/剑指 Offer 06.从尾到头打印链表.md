输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

示例 1：

```
输入：head = [1,3,2]
输出：[2,3,1]
```


### 暴力解法

* 用数组记录每个节点的值然后反转数组
* 遍历链表
* 将值放到数组中，然后反转数组
* 时间复杂度 O(n)
* 空间复杂度 O(1)

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
    let result = [];
    
    while (head !== null) {
        result.push(head.val);
        head = head.next
    }
    
    return result.reverse();
};
```

### 翻转链表
翻转链表然后重新将数据压到数组中

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
    let current = head;
    let pre = new ListNode(-1);
    pre.next = head; // 给当前的 head 新加一个 元素 unshift
    let len = 0;
    // 翻转链表
    // 新建一个 pre
    while (current !== null) {
        let next = current.next;
        current.next = pre;
        pre = current;
        current = next;
        ++len;
    }
    
    let result = [];
    for (let i = 0; i < len; i++) {
        result[i] = pre.val;
        pre = pre.next;
    }
    
    return result;
};
```