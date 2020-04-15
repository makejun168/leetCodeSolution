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

var reverseList = function (head) {
  let prev = null;
  let curr = head;
  while (curr !== null) {
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
