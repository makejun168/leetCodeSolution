把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。
例如，数组  [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为 1。

示例 1：

```
输入：[3,4,5,1,2]
输出：1
```

### 解法一

* 二分查找法
* 时间复杂度 平均时间复杂度为 O(\log n)O(logn)，其中 nn 是数组 \it numbersnumbers 的长度。如果数组是随机生成的，那么数组中包含相同元素的概率很低，在二分查找的过程中，大部分情况都会忽略一半的区间。而在最坏情况下，如果数组中的元素完全相同，那么 \texttt{while}while 循环就需要执行 nn 次，每次忽略区间的右端点，时间复杂度为 O(n)O(n)。
* 空间复杂度 O(1)

```js
/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    let i = 0;
    let j = numbers.length - 1;
    while (i < j) {
        let middle = Math.floor((i + j) / 2);
        if (numbers[middle] < numbers[j]) {
            j = middle
        } else if (numbers[middle] > numbers[j]) {
            i = middle + 1;
        } else {
            j -= 1
        }
    }
    
    return numbers[i]; // 二分查找 最大位数的下标
};
```

### 解法二

暴力解法，找两个数组之间的中间值

```js
var minArray = function(numbers) {
    if (numbers.length === 1) return numbers[0]
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > numbers[i - 1]) {
            return numbers[i];
        }
    }
    
    return numbers[0]
};
```


### 解法三

取巧法，没有技术含量

```js
var minArray = function(numbers) {
    return Math.min(...numbers); // 最小值
};
```


