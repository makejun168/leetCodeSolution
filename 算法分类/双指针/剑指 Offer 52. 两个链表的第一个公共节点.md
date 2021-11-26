输入两个链表，找出它们的第一个公共节点。

如下面的两个链表：

![img.png](img.png)

在节点 c1 开始相交。

示例 1：

![img_1.png](img_1.png)

```
输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
输出：Reference of the node with value = 8
输入解释：相交节点的值为 8 （注意，如果两个列表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
```

示例 2：

![img_2.png](img_2.png)

```
输入：intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
输出：Reference of the node with value = 2
输入解释：相交节点的值为 2 （注意，如果两个列表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [0,9,1,2,4]，链表 B 为 [3,2,4]。在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。
```

示例 3：

![img_3.png](img_3.png)

```
输入：intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
输出：null
输入解释：从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。
解释：这两个链表不相交，因此返回 null。
```

### 哈希表方法
* 遍历一次 用哈希表记录，链表的顺序，
* 遍历第二次，找到第一个出现重复的顺序的，马上就返回
* 时间复杂度 O(m+n) 两个链表长度相加
* 空间复杂度 O(m) 需要存一个哈希长度是 O(m) 

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let hash = new Set();
    let temp = headA;
    while (temp !== null) {
        hash.add(temp);
        temp = temp.next;
    }
    
    temp = headB;
    while (temp !== null) {
        if (hash.has(temp)) {
            return temp
        }
        temp = temp.next;
    }
    return null;
};
```

### 双指针法

* 快慢指针

我们使用两个指针 node1，node2 分别指向两个链表 headA，headB 的头结点， 然后同时分别逐结点遍历，
当 node1 到达链表 headA 的末尾时， 重新定位到链表 headB 的头结点；
当 node2 到达链表 headB 的末尾时，重新定位到链表 headA 的头结点。

这样，当它们相遇时，所指向的结点就是第一个公共结点。

```js
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let left = headA;
    let right = headB;
    while (left !== right) {
        if (left === null) {
            left = headB;
        } else {
            left = left.next;
        }
        if (right === null) {
            right = headA;
        } else {
            right = right.next;
        }
    }
    return left;
};
```