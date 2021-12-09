输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。


```
输入：arr = [3,2,1], k = 2
输出：[1,2] 或者 [2,1]
```

```
输入：arr = [0,1,2,1], k = 1
输出：[0]
```

### 排序获取

* 时间复杂度 O(nlogN)

```js
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
    if (!arr.length) return [];
    if (!k) return [];
    // 返回最小的 k 位的 数组
    let result = [];
    
    arr.sort((a, b) => b - a);
    return arr.slice(-k);
};
```

### 堆

我们用一个大根堆实时维护数组的前 kk 小值。

首先将前 kk 个数插入大根堆中，随后从第 k+1 k+1 个数开始遍历，
如果当前遍历到的数比大根堆的堆顶的数要小，就把堆顶的数弹出，
再插入当前遍历到的数。
最后将大根堆里的数存入数组返回即可。

```js
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
    if (!arr.length) return [];
    if (!k) return [];
    
    let queue = [];
    for (let i = 0; i < k; ++i) {
        queue.push(arr[i]);
    }
    
    for (let i = k; i < arr.length; ++i) {
        if (queue.slice(-1) > arr[i]) {
            queue.pop();
            queue.push(arr[i]);
        }
    }
    
    return queue;
};
```