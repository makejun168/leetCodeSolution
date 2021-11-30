请实现 copyRandomList 函数，复制一个复杂链表。在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null。


示例
```
输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]
```

### 拼接法

### 哈希表解法

* 时间复杂度 O(n)
* 空间复杂度 O(1)


```js
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (head === null) return null;
    
    let cur = head;
    let hash = new Map();
    while (cur !== null) {
        hash.set(cur, new Node(cur.val))
        cur = cur.next;
    }
    
    cur = head; // 重新回到起点
    
    while (cur !== null) {
        hash.get(cur).next = hash.get(cur.next) === undefined ? null : hash.get(cur.next);
        hash.get(cur).random = hash.get(cur.random);
        
        cur = cur.next;
    }
    
    return hash.get(head);
};
```

