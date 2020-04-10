/**
 * Definition for singly-linked list.
 * 因为 JS 没有链表 用 方法类型代替 val 代表链表的值 head 代表链接 下一个 
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
  let number = '';
    while(head) {
        number += head.val
        head = head.next;
    }
    return  parseInt(number,2)
};

// console.log(getDecimalValue([1,0,1]))