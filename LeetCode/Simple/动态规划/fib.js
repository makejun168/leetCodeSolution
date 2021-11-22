// 斐波那契数，通常用 F(n) 表示，形成的序列称为斐波那契数列。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

// F(0) = 0,   F(1) = 1
// F(N) = F(N - 1) + F(N - 2), 其中 N > 1.

/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
  if (N < 1) return 0;
  let memo = {};
  return helper(memo, N);
};

var helper = function (memo, n) {
  if (n === 1 || n === 2) return 1;
  if (memo[n]) return memo[n];
  memo[n] = helper(memo, n - 1) + helper(memo, n - 2);
  return memo[n];
};

// 解法2 获取整个 DP 用对象的形式存储 迭代的方式
var fib = function (N) {
  if (N < 1) return 0;
  if (N === 1 || N === 2) return 1;
  let DP = {};
  DP[1] = DP[2] = 1;
  for (let i = 3; i <= N; i++) {
    DP[i] = DP[i - 1] + DP[i - 2];
  }
  return DP[N];
};

// 解法3 细节优化 根据斐波那契数列的状态转移方程，当前状态只和之前的两个状态有关，其实并不需要那么长的一个 DP table 来存储所有的状态，只要想办法存储之前的两个状态就行了
// 状态转移的理解 用变量保留状态，下一个状态过来覆盖当前的状态
var fib = function (N) {
  if (N < 1) return 0;
  if (N === 1 || N === 2) return 1;
  let prev = 1;
  let cur = 1;
  for (let i = 3; i <= N; i++) {
    let sum = prev + cur;
    prev = cur;
    cur = sum;
  }
  return cur;
};
