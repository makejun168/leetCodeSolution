给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。

返回删除后的链表的头节点。

注意：此题对比原题有改动

示例 1:

```
输入: head = [4,5,1,9], val = 5
输出: [4,1,9]
解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.
```

示例 2:


```
输入: head = [4,5,1,9], val = 1
输出: [4,5,9]
解释: 给定你链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9.
```

### 解题思路

* 遍历链表，当遍历到链表到达指定 value 的时候，跳出循环
* 让上一个 pre.next 指向 当前 current.next 
* 最后返回链表，跳过目标的链表

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
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
    if (head.val === val) return head.next; // 直接跳过 head 就行了
    let pre = head; // 上一个就是当前
    let current = head.next; // 下一个是 current
    while (current != null && current.val !== val) {
       pre = current;
       current = current.next
    }
    if (current !== null) pre.next = current.next; // 跳过当前的
    return head;
};
```