数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

#### 示例

输入: [1, 2, 3, 2, 2, 2, 5, 4, 2]

输出: 2


### 解法一

哈希解法
* 遍历数组，将数组中的值作为Key 存入到 哈希表中
* 在遍历的同时，获取当前最大值，输出最大值对应的 Key值


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