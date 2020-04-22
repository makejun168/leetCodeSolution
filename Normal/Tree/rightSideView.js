var rightSideView = function(root) {
  if(!root) return [];

  // Map存储，key是当前节点的高度，value是当前节点的值
  let depthMap = new Map();

  // 构造队列，并赋予队首元素的初始高度
  let queue = [[root, 0]];

  while(queue.length) {
    // 取出队首元素
    let [ {val, left, right}, depth ] = queue.shift();

    /*
    关键点
    更新Map中每个key所对应的val，
    因为是BFS，所以可以保证最终Map的key所对应的val是同一层节点中的最右边节点的val
    */
    depthMap.set(depth, val);

    // 高度递增
    depth += 1;

    // 仅将存在的节点推入队列中
    if(left) {
      queue.push([left, depth]);
    }

    // 仅将存在的节点推入队列中
    if(right) {
      queue.push([right, depth]);
    }
  }

  // Map.prototype.values()返回是可迭代对象，故需利用“展开语法”来将其转换为数组
  return [...depthMap.values()]; 
}


var rightSideView = function(root) {
  if(root==null) return []

  // 定义数组（队列）
  var arr=[]
  // 定义最终答案存放数组
  var res=[]
  // 将二叉树放在队列中
  arr.push(root)


  // 开始遍历
  while(arr.length > 0) {
    // 最后一位拼接到 最终答案中
    res.push(arr[arr.length-1].val);
    var len = arr.length;
    // 内
    while (len>0) {
      var now = arr.shift();
      if (now.left!=null)
        arr.push(now.left)
      if(now.right!=null)
        arr.push(now.right)
      // 递减
      len--
    }
  }
  return res

};
