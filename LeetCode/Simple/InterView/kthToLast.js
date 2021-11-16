// 老方法：p,q两个指针，让p先走k步，然后p,q一起走，直到p为null

var getKthFromEnd = function(head, k) {
  let p = head, q = head;

  let i = 0;
  while (p) {
      if (i >= k) {
          q = q.next;
      }
      p = p.next;
      i++;
  }
  return i < k ? null : q;
};
