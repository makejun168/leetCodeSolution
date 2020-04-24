/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 // 迭代算法 合并链表

var mergeTwoLists = function(l1, l2) {
  // 定义空链表
  let dumy = new ListNode(0);
  let p = dumy;
  // 遍历链表
  while(l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      p.next = l1; // 拼接到 新链表中
      l1 = l1.next; // l1 链表往前 走一步
    } else {
      p.next = l2; // 拼接
      l2 = l2.next; // l2 链表往前 走一步
    }
    p = p.next; // p 链表 往前走一步
  }
  // 看看是否还有剩余的链表尚未拼接 直接将剩余的链表 拼接到末尾 即可
  // 此时，l1 和 l2 的确切之一可以是非 null 的，因此请将非空列表连接到合并列表的末尾。
  if (l1 !== null) {
    p.next = l1;
  }
  if (l2 !== null) {
    p.next = l2;
  }
  // 返回空链表的下一个 空链表的头是 0
  return dumy.next;
};

// 递归合并链表 并且排序
var mergeTwoLists = function(l1, l2) {
  if (l1 === null) {
    // 拼接 l2
    return l2;
  } else if (l2 === null) {
    // 拼接 l1
    return l1;
  } else if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    // 合并 l2
    l2.next = mergeTwoLists(l1, l2.next)
    return l2;
  }
}
