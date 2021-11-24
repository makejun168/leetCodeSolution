输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。

序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。

示例 1：

```
输入：target = 9
输出：[[2,3,4],[4,5]]
```


```
输入：target = 15
输出：[[1,2,3,4,5],[4,5,6],[7,8]]
```


### 暴力解法一

#### 思路

* 遍历所有存在的可能
* 目标数字肯定是在 target / 2 
* 从 1 开始遍历到目标数字 target / 2 (数学逻辑)
* 循环体内容 在来判断 是否能递增到 增加到 target 目标数字
* 如果符合逻辑 再遍历一遍 从数字中取出 存到临时数组中
* 返回二维数组
* 时间复杂度 O((n/2)^2)
* 空间复杂度 O(n/2)


```js
/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
    let result = [];
    for (let i = 1; i < target / 2; i++) {
        let count = i;
        let temp = target;
        while (temp > 0) {
            temp = temp - count;
            count++;
        }
        if (temp === 0) {
            let arr = [];
            let a = i;
            for (let j = 0; j < count - i; j++) {
                arr[j] = a;
                a++;
            }
            result.push(arr);
        }
    }
    
    return result
};
```

### 解法二

#### 思路

滑动窗口可以看成数组中框起来的一个部分。
在一些数组类题目中，我们可以用滑动窗口来观察可能的候选结果。
当滑动窗口从数组的左边滑到了右边，我们就可以从所有的候选结果中找到最优的结果。

对于这道题来说，数组就是正整数序列 [1, 2, 3, ..., n][1,2,3,…,n]。
我们设滑动窗口的左边界为 ii，右边界为 jj，则滑动窗口框起来的是一个左闭右开区间 [i, j)[i,j)。
注意，为了编程的方便，滑动窗口一般表示成一个左闭右开区间。
在一开始，i=1, j=1i=1,j=1，滑动窗口位于序列的最左侧，窗口大小为零

滑动窗口的重要性质是：窗口的左边界和右边界永远只能向右移动，而不能向左移动。这是为了保证滑动窗口的时间复杂度是 O(n)。如果左右边界向左移动的话，这叫做“回溯”，算法的时间复杂度就可能不止 O(n)

双指针

* 时间复杂度 O(n) 优化了时间复杂度
* 空间复杂度 O(1)


```js
/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
    let result = []; // 最终的结果
    let i = 1; // 左指针
    let j = 1; // 右指针
    let sum = 0; // 总数
    // 当左边的指针 大于 数组 一半跳出循环
    while (i < target / 2) {
        if (sum < target) {
            sum += j; // sum 还没到达 target 窗口向右变大
            j++; // 向右增加
        } else if (sum > target) {
            sum -= i; // sum 超过了 target ，当前的左指针不能满足需求，左指针 向右增加
            i++;
        } else {
            // 符合条件
            let arr = [];
            for (let k = i; k < j; k++) {
                arr.push(k);
            }
            result.push(arr); // 输出结果
            sum -= i; // 这一步最难理解 sum 总数 减去 i
            i++; // 当前左指针满足需求了，继续往前增加
        }
    }
    
    return result;
};
```