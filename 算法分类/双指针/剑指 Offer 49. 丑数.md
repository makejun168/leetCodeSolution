我们把只包含质因子 2、3 和 5 的数称作丑数（Ugly Number）。求按从小到大的顺序的第 n 个丑数

示例:

```
输入: n = 10
输出: 12
解释: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 是前 10 个丑数。
```

### 解法一 

指针 移动的方式


我们的目的是从小到大 罗列丑数，然后通过下标索引返回答案

### 思路
确定遍历次数，遍历次数是 1 开始 到目标的下标 因为如果是 0 的话 返回也是 1

这里实现的思路是通过通过指针，一步步走，找出下标索引之前全部的丑数，2，3，5三个质因子都是从 0 下标开始执行

从下标 0 开始 1 * 2 或者 1 * 3 或者 1 * 5 在里面找到最小数，这个最小数就是下一个 丑数了 如此类推

假如 最小数是 2 那么 2 的指针 + 1  
假如 最小数是 3 那么 3 的指针 + 1  
假如 最小数是 5 那么 5 的指针 + 1  




* 时间复杂度 O(n)
* 时间复杂度 O(n)


```js
/**
 * @param {number} n
 * @return {number}
 */
 var nthUglyNumber = function(n) {
     if (n < 1) return 0
     let count = 1;
     let uglyList = [1];
     let twoPointer = 0;
     let threePointer = 0;
     let fivePointer = 0;
     while (count !== n) {
         let minValue = Math.min(2*uglyList[twoPointer], 3*uglyList[threePointer], 5*uglyList[fivePointer]); // 获取当前需要移动的指针
         uglyList.push(minValue); // 丑数放在 丑数的列表中
         count+=1; // 目标向前移动一位
         if (minValue === 2 * uglyList[twoPointer]) {
             twoPointer+=1
         }
         if (minValue === 3 * uglyList[threePointer]) {
            threePointer+=1
        }
        if (minValue === 5 * uglyList[fivePointer]) {
            fivePointer+=1
        }
     }
     return uglyList[count - 1];
};

nthUglyNumber(12)
```