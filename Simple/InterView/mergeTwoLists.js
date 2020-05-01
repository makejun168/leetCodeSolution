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
var mergeTwoLists = function (l1, l2) {
    var merge = function (l1, l2) {
        if (!l1) {
            return l2;
        } else if (!l2) {
            return l1;
        }
        if (l1.val < l2.val) {
            l1.next = merge(l1.next, l2);
            return l1;
        } else {
            l2.next = merge(l1, l2.next);
            return l2;
        }
    }
    return merge(l1, l2);
};


// 递归合并链表 并且排序
var mergeTwoLists = function (l1, l2) {
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
