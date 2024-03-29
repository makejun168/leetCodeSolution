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
// 默认最大堆
const defaultCmp = (x, y) => x > y;
// 交换元素
const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);
// 堆类，默认最大堆
class Heap {
    constructor(cmp = defaultCmp) {
        this.container = [];
        this.cmp = cmp;
    }
    // 插入
    insert(data) {
        const { container, cmp } = this;
        container.push(data);
        let index = this.size() - 1;
        while (index) {
            let parent = (index - 1) >> 1;
            if (!cmp(container[index], container[parent])) {
                return;
            }
            swap(container, index, parent);
            index = parent;
        }
    }
    // 弹出堆顶，并返回
    pop() {
        const { container, cmp } = this;
        if (!this.size()) {
            return null;
        }

        swap(container, 0, this.size() - 1);
        const res = container.pop();
        const length = this.size();
        let index = 0,
            exchange = index * 2 + 1;

        while (exchange < length) {
            // // 以最大堆的情况来说：如果有右节点，并且右节点的值大于左节点的值
            let right = index * 2 + 2;
            if (right < length && cmp(container[right], container[exchange])) {
                exchange = right;
            }
            if (!cmp(container[exchange], container[index])) {
                break;
            }
            swap(container, exchange, index);
            index = exchange;
            exchange = index * 2 + 1;
        }

        return res;
    }
    // 获取堆大小
    size() {
        return this.container.length;
    }
    // 获取堆顶
    peek() {
        if (this.size()) return this.container[0];
        return null;
    }
}

const getLeastNumbers = (arr, k) => {
    const res = [];
    // 创建最大堆
    const maxHeap = new Heap();
    // 先将数组前k个元素放入堆
    for (let i = 0; i < k; i++) {
        maxHeap.insert(arr[i]);
    }
    // 再遍历数组其余元素
    const len = arr.length;
    for (let i = k; i < len; i++) {
        // 若遇到比堆顶小的元素，堆顶弹出，当前数入堆
        if (arr[i] < maxHeap.peek()) {
            maxHeap.pop();
            maxHeap.insert(arr[i]);
        }
    }
    // 最后从堆中弹出k个数即可
    for (let i = 0; i < k; i++) {
        res.push(maxHeap.pop());
    }
    return res;
};
```