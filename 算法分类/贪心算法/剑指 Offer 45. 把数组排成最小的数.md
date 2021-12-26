输入一个非负整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。

```
输入: [10,2]
输出: "102"
```


### 数字全排列 计算最小值

每次选取的是 当前选择中的最小值


```js
/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        nums[i] = nums[i] + '';
    }

    var swap = function (nums, i, j) {
        let tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }

    // 冒泡排序
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (nums[j] + nums[j + 1] > nums[j + 1] + nums[j]) {
                swap(nums, j, j + 1);
            }
        }
    }
    return nums.join('');
};

minNumber([2,1]);
```

### Sort 方法 排序

a + b > b + a;

```js
const minNumber = nums => nums.sort((a, b) => `${a}${b}` - `${b}${a}`).join('');
```