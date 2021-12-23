从若干副扑克牌中随机抽 5 张牌，判断是不是一个顺子，
即这5张牌是不是连续的。

2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。

A 不能视为 14。

```
输入: [1,2,3,4,5]
输出: True
```

```
输入: [0,0,1,2,5]
输出: True
```

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
    if (nums.length < 5) {
        return false
    }
    let joker = 0;
    // 排序一次
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < 4; i++) {
        if (nums[i] === 0) {
            joker++; // 计算有多少个 joker
        } else if (nums[i] === nums[i+1]) return false;
    }
    
    return nums[4] - nums[joker] < 5;
};
```


### 解法二

正常人思路

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
     let max = 0
     let min = 15
     let zero = 0  
     let obj = {}
     for(let i=0;i<nums.length;i++){
       if(nums[i]==0){
           zero++
       }else if(max<nums[i]){
           max = nums[i]
       }
       if(min>nums[i]&& nums[i]!==0){
           min = nums[i]
       }
       if(nums[i]!==0){
        if(!obj[nums[i]]){
            obj[nums[i]] = true
        } else {
            return false
        }
       }  
    }

    let p = min
    while( p < max) {
        if(obj[p + 1]){
            p++
        } else {
            zero--
            p++
        }
        if(zero < 0){
            return false
        }
    }
    if(p >= max){
        return true
    }
    return false
};
```