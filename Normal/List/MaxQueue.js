var MaxQueue = function() {
  this.inStack = [];
  this.outStack = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
  console.log(this.inStack);
  if (!this.inStack.length) {
    return -1;
  }
  return Math.max(...this.inStack);
};

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
  this.inStack.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
  let target = this.inStack.shift();
  if (target) {
    this.outStack.push(target);
    return target;
  } else {
    return -1;
  }
};

// ["MaxQueue","push_back","push_back","max_value","pop_front","max_value"]
// [[],[1],[2],[],[],[]]

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */

var obj = new MaxQueue();
obj.push_back(1);
obj.push_back(2);
console.log(obj.max_value())
obj.pop_front();
console.log(obj.max_value());
