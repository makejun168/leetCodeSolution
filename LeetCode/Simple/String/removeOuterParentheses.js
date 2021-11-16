var removeOuterParentheses = function(S) {
  let res = "";
  let cnt = 0;
  let start = 0;
  for (let i = 0; i < S.length; i++) {
      if (S[i] === '(') {
          cnt++;
      } else {
          if (--cnt === 0) {
              // 找到原本的词语，拼接结果
              res += S.substring(start + 1, i);
              // 设置下一个原语起点，继续查找
              start = i + 1;
          }
      }
  }
  return res;
};
