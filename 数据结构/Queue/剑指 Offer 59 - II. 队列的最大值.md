请定义一个队列并实现函数 max_value 得到队列里的最大值，
要求函数 max_value、push_back 和 pop_front 的均摊时间复杂度都是O(1)。

若队列为空，pop_front 和 max_value 需要返回 -1


```
输入: 
["MaxQueue","push_back","push_back","max_value","pop_front","max_value"]
[[],[1],[2],[],[],[]]
输出: [null,null,null,2,1,2]
```

```
输入: 
["MaxQueue","pop_front","max_value"]
[[],[],[]]

输出: [null,-1,-1]
```


```js
var MaxQueue = function() {
    this.inStack = [];
    this.outStack = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
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

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
```