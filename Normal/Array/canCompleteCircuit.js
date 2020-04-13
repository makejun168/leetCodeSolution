/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  for (let i = 0; i < gas.length; i++) {
    let currentIdx = i;
    let currentGas = 0;
    // 同步数组
    let costArr = cost.slice(currentIdx).concat(cost.slice(0, currentIdx));
    let gasArr = gas.slice(currentIdx).concat(gas.slice(0, currentIdx));
    for (let j = 0; j < costArr.length; j++) {
      currentGas += gasArr[j];
      currentGas -= costArr[j];
      if (currentGas < 0) {
        break;
      }
      if (j === costArr.length - 1 && currentGas >= 0) {
        return currentIdx;
      }
    }
  }
  return -1;
};

var gas = [3,3,4]
var cost = [3,4,4]

console.log(canCompleteCircuit(gas, cost))
