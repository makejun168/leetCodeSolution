定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。

示例:

```
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
```

### 状态压缩


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
* @return {ListNode}
  */
var reverseList = function(head) {
    let pre = null;
    let current = head;
    // next -> current -> pre
    while (current !== null) {
        let next = current.next;
        current.next = pre;
        pre = current;
        current = next;
    }
    return pre;
};
```


### 递归

```js
var reverseList = function(head) {
    if (head === null || head.next === null) {
        return head
    }
    let next = head.next;
    head.next = reverseList(next.next)
    next.next = head;
    
    return next;
};
```