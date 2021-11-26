如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，那么中位数就是所有数值排序之后位于中间的数值。如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。

例如，

[2,3,4] 的中位数是 3

[2,3] 的中位数是 (2 + 3) / 2 = 2.5

设计一个支持以下两种操作的数据结构：

* void addNum(int num) - 从数据流中添加一个整数到数据结构中。 
* double findMedian() - 返回目前所有元素的中位数。


### 示例

```
输入：
["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"]
[[],[1],[2],[],[3],[]]
输出：[null,null,null,1.50000,null,2.00000]
```


### 解法一 

#### 暴力解法

* addNum 添加数字到数组中存储
* finderMedian 找到数字的中位数，并且输出中位数

```js
/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    // ["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"]
    this.data = [1, 2];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.data.sort(); // 数值需要重新排序
    this.data.push(num);
    return null;
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    let result = null;
    let middle = Math.ceil(this.data.length / 2);
    // 判断数组的长度，长度为奇数
    if (this.data.length % 2 !== 0) {
        // 奇数的情况
        result = this.data[middle];
    } else {
        result = (this.data[middle] + this.data[middle + 1]) / 2 // 不需要取整 
    }
    return result;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
```


### 解法二
双指针

* 左右指针维护 最左边的索引和 最右边的索引
* 

```js
/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.left = 0;
    this.right = 0;
    this.queue = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (this.left === this.right) {
        this.right++;
    } else {
        this.left++;
    }
    this.queue.push(num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (!this.queue.length) return null;
    
    this.queue.sort((a, b) => a - b);
    return (this.queue[this.left] + this.queue[this.right]) / 2
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
```