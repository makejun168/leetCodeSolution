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

// 反转链表
var reverseList = function (head) {
  // 定义之前的 节点为 null;
  // 当前的链表
  let prev = null;
  let curr = head;
  // 循环当前的链表
  while (curr !== null) {
    // 下一个链表的值
    let cnext = curr.next;
    if (prev === null) {
      curr.next = null;
    } else {
      curr.next = prev;
    }
    prev = curr;
    curr = cnext;
  }
  return prev;  
};
