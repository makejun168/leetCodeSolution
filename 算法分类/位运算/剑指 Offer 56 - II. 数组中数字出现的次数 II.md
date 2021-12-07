在一个数组 nums 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字。

示例 1：

```
输入：nums = [3,4,3,3]
输出：4
```

```
输入：nums = [9,1,7,9,7,9,7]
输出: 1
```


### 哈希表记录出现次数

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if (!nums.length) return null;
    
    let hash = new Map();
    
    for (let i = nums.length - 1; i >= 0; i--) {
        if (hash.has(nums[i])) {
            hash.set(nums[i], hash.get(nums[i]) + 1)
        } else {
            hash.set(nums[i], 1)
        }
    }
    
    let ans = null;
    for (let item of hash) {
        if (item[1] === 1) {
            ans = item[0];
        }
    }
    return ans;
};
```