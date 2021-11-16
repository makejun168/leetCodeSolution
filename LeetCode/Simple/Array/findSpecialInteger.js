// 输入：arr = [1,2,2,6,6,6,6,7,10]
// 输出：6

var findSpecialInteger = function (arr) {
  const len = arr.length;
  if (!len) {
    return "";
  }
  let totalNumArr = [];
  for (let i = 0; i < len; i++) {
    if (totalNumArr.indexOf(arr[i]) < 0) {
      totalNumArr.push(arr[i]);
    }
  }
  let resultArr = [];
  for (let j = 0; j < totalNumArr.length; j++) {
    resultArr.push([]);
    for (let k = 0; k < len; k++) {
      // console.log(arr[k])
      if (totalNumArr[j] === arr[k]) {
        resultArr[j].push(arr[k]);
      }
    }
  }
  let resultIndex = 0;
  let resultLen = 0;
  for (let m = 0; m < resultArr.length; m++) {
    if (resultArr[m].length > resultLen) {
      resultLen = resultArr[m].length;
      resultIndex = m;
    }
  }
  return resultArr[resultIndex];
};

findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10]);
