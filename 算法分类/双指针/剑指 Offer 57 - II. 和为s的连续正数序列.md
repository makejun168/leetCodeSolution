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

双指针

* 时间复杂度
* 空间复杂度


```js
/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
    let result = []; // 最终的结果
    let i = 1; // 左指针
    let j = 1; // 右指针
    let sum = i + j;
    // 当左边的指针 大于 数组 一半跳出循环
    while (i < target / 2) {
        if (sum < target) {
            sum += ++j;
        } else if (sum > target) {
            sum -= i++;
        } else {
            let arr = [];
            for (let k = i; k < j; k++) {
                arr.push(k);
            }
            result.push(arr)
            sum -= i;
            i++;
        }
    }
    
    return result;
};
```