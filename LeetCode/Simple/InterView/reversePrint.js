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
  if (!head) {
    return [];
  }
  var root = head;
  var arr = reversePrint(head.next);
  arr.push(root.val);
  return arr;
};