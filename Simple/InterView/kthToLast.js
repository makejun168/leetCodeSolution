/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
var kthToLast = function(head, k) {
  let kn = head;
  let ln = head;
  let index = 0;
  while (kn) {
    index++;
    if (index > k) {
      ln = ln.next;
    }
    kn = kn.next;
  }
  return ln.val
};