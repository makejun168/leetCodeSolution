/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
  let count = 0;
  var move = function(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        count++;
      }
    }
  }
  
  move(heights);
  return count;
};


heightChecker([5,1,2,3,4]);