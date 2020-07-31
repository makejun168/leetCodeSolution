// 斐波那契数，通常用 F(n) 表示，形成的序列称为斐波那契数列。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

// F(0) = 0,   F(1) = 1
// F(N) = F(N - 1) + F(N - 2), 其中 N > 1.

/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  if (N < 1) return 0;
  let memo = {};
  return helper(memo, N);
};

var helper = function(memo, n) {
  if (n === 1 || n === 2) return 1;
  if (memo[n]) return memo[n];
  memo[n] = helper(memo, n - 1) + helper(memo, n - 2);
  return memo[n]
}