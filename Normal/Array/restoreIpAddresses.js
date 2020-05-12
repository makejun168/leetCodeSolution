// 输入: "25525511135"
// 输出: ["255.255.11.135", "255.255.111.35"]

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  if (s.length > 12) return []
  let result = []
  fn(s, [], result)
  console.log(result);
  return result;
};

function fn(remain, temp, result) {
  if (temp.length === 3) {
    // 如果已经存在三组的 ip 地址的话 剩下的直接拼接到 最后的部分 
    // 递归结束体
    isValidate(remain) && result.push([...temp, remain].join('.'))
    return
  }
  // 递归主体
  // 总共有 3 种可能
  for (let i = 1; i < 4; i++) {
    // 判断当前的字符串 是否符合规则
    if (isValidate(remain.substr(0, i))) {
      // 递归
      fn(remain.substr(i), [...temp, remain.substr(0, i)], result)
    }
  }
}

function isValidate(s) {
  if (!s.length) return false;
  return 0 <= +s && +s <= 255 && (s.length > 1 ? !!+s[0] : true)
}

// restoreIpAddresses('25525511135');
