数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

#### 示例

输入: [1, 2, 3, 2, 2, 2, 5, 4, 2]

输出: 2


### 解法一

哈希解法
* 遍历数组，将数组中的值作为Key 存入到 哈希表中
* 在遍历的同时，获取当前最大值，输出最大值对应的 Key值
* 时间复杂度是 O(n)
* 空间复杂度是 O(n)


```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if (!nums.length) return undefined
    let hash = new Map(); // 定义hash Map
    let maxKey = undefined;
    let maxNum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (!hash.has(nums[i])) {
            hash.set(nums[i], 1)
        } else {
            hash.set(nums[i], hash.get(nums[i])+1)
        }
        if (hash.get(nums[i]) > maxNum) {
            maxNum = hash.get(nums[i]);
            maxKey = nums[i]
        }
    }
    return maxKey;
};
```

### 解法二

排序法，前面的思路并没有考虑到数组的特性，数组中有一个数字出现的次数是长度的一半。
将这个数组排序，那么排序之后位于数组中间的数肯定就是出现次数最多的数字，中位数。

排序解法
* 数组快速排序
* 排序后获取数组的下标 n 位长的数组，它的中位数， n/2 
* 时间复杂度是 O(n)
* 空间复杂度是 1

```js
var majorityElement = function (nums) {
    let maxNum = undefined;
    nums.sort((a, b) => b - a)
    return nums[Math.floor(nums.length / 2)]
}
```


### 解法三
记录法，因为需要找出数字出现的次数要比数组长度一半要多，
考虑遍历数组的时候记录两个值，数字的值，数字出现的次数
如果遍历的时候下一个数字的值和本次的值相同，那么次数+1
如果下一个数字的值和本次不同，那么次数-1
如果到最后次数为0，那么我们需要保存下一个数字，并且把数字设为1。
因为数组中数字出现的次数为数组长度的一半

循环 单指针控制 逻辑判断

* 时间复杂度是 O(n)
* 空间复杂度是 1

```js
var majorrityElement = function (nums) {
    if (!nums.length) return undefined
    let result = nums[0];
    let time = 0; // 次数为 0
    for (let i = 0; i < nums.length; i++) {
        if (time === 0) {
            result = nums[i]
            time = 1
        } else if (nums[i] === result) {
            time++;
        } else {
            time--;
        }
    }
    
    return result;
}
```

具体逻辑