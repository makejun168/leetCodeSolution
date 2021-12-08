定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，

调用 min、push 及 pop 的时间复杂度都是 O(1)。

```
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.min();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.min();   --> 返回 -2.
```

### 数组特性实现

```js
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    // 定义队列 数据结构
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    // 弹出队列 栈 head
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    return Math.min(...this.stack);
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
```

### 利用辅助栈实现

* 利用辅助栈 由 O(n) 变成 O(1)

```js
/**
 * initialize your data structure here.
 */
var MinStack = function() {
        this.stackA = [];
        this.stackB = [];
    };

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stackA.push(x);
    if (this.stackB.length === 0 || this.stackB.slice(-1) >= x) {
        this.stackB.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.stackA.pop() === this.stackB.slice(-1)) {
        this.stackB.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stackA.slice(-1);
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    return this.stackB.slice(-1);
};
```