/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

// 两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。
// 给出两个整数 x 和 y，计算它们之间的汉明距离。

// var hammingDistance = function(x, y) {
//   // 布来克你跟 算法
//   let xor = x ^ y
//   let distance = 0
//   while(xor){
//     distance += 1
//     xor = xor & (xor - 1)
//   }
//   console.log(distance)
//   return distance
// };



var hammingDistance = function(x, y) {
  console.log(x >>= 1);
  console.log(y >>= 1);
  let ans = 0
  while (x !== 0 || y !== 0) {
    if ((x & 1) !== (y & 1)) {
        ans++
    }
    // 右移运算是将一个二进制位的操作数按指定移动的位数向右移动，移出位被丢弃，左边移出的空位或者一律补 0
    // 左移运算是将一个二进制位的操作数按指定移动的位数向左移位，移出位被丢弃，右边的空位一律补 0
    x >>= 1
    y >>= 1
  }
  return ans
};

hammingDistance(1, 4);