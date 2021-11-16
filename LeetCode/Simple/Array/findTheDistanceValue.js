/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    let isOk = true;
    for (let j = 0; j < arr2.length; j++) {
      console.log(Math.abs(arr1[i] - arr2[j]))
      if (Math.abs(arr1[i] - arr2[j]) > d) {
        continue;
      } else {
        isOk = false;
        break;
      }
    }
    isOk && count++;
  }
  console.log(count);
  return count;
};

// let arr1 = [1,4,2,3], arr2 = [-4, -3, 6, 10, 20, 30], d = 3
let arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2;
findTheDistanceValue(arr1, arr2, d);
