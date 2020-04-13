# leetCodeSolution
通过Javascript去实现leetCode的题目  
[刷题地址][https://leetcode-cn.com/]  

### 进度
54 / 1564

> 已经通过的题目：55
> 提交未通过的题目 11  
> 未开始的题目：1552  

### 目录结构
```
Simple          //简单难度
Normal          //中等难度
Difficult       //困难难度
PersonalCode    //个人代码
```
### 通过的题目
- Simple
    - reverseLeftWords [左旋转字符串][https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/]
    - numberOfSteps [将数字变成0的次数][https://leetcode-cn.com/problems/number-of-steps-to-reduce-a-number-to-zero/]
    - distributeCandies [分糖果][https://leetcode-cn.com/problems/distribute-candies/]
    - peakIndexInMountainArray [山脉数组的峰顶索引][https://leetcode-cn.com/problems/peak-index-in-a-mountain-array/]
    - removeDuplicates [删除数组的重复项][https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/]
    - strStr [实现 strStr()][https://leetcode-cn.com/problems/implement-strstr/]
    - flipAndInvertImage [翻转图像][https://leetcode-cn.com/problems/flipping-an-image/]
    - reverse [整数反转][https://leetcode-cn.com/problems/reverse-integer/]
    - reverseString [反转字符串][https://leetcode-cn.com/problems/reverse-string/]
    - containsDuplicate [存在重复的元素][https://leetcode-cn.com/problems/contains-duplicate/]
    - twoSum [两数之和][https://leetcode-cn.com/problems/two-sum/]
    - numJewelsInStones [统计位数为偶数的数字][https://leetcode-cn.com/problems/find-numbers-with-even-number-of-digits/]
    - judgeCircle [机器人是否返回到原点][https://leetcode-cn.com/problems/robot-return-to-origin/]
    - findComplement [数字的补数][https://leetcode-cn.com/problems/number-complement/]
    - canWinNim [Nim game][https://leetcode-cn.com/problems/nim-game/]
    - reverseWords [反转字符串中的单词Ⅲ][https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/]
    - uniqueMorseRepresentations [唯一摩斯密码][https://leetcode-cn.com/problems/unique-morse-code-words/]
    - titleToNumber [Excel表序列号][https://leetcode-cn.com/problems/excel-sheet-column-number/]
    - toLowerCase [转换成小写字母][https://leetcode-cn.com/problems/to-lower-case/]
    - islandPerimeter [岛屿的周长][https://leetcode-cn.com/problems/island-perimeter/]
    - movie [有趣的电影][https://leetcode-cn.com/problems/not-boring-movies/]
    - findSpecialInteger [找出数组中出现次数最多的数组][https://leetcode-cn.com/problems/element-appearing-more-than-25-in-sorted-array/]
    - tictactoe [找出井字棋的获胜者][https://leetcode-cn.com/problems/find-winner-on-a-tic-tac-toe-game/]
    - game [猜数字][https://leetcode-cn.com/problems/guess-numbers/]
    - subtractProductAndSum [证书的各位积和之差][https://leetcode-cn.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/]
    - findNumbers [统计位数为偶数的数字][https://leetcode-cn.com/problems/find-numbers-with-even-number-of-digits/]
    - smallerNumbersThanCurrent [有多少小于当前数字的数字][https://leetcode-cn.com/problems/how-many-numbers-are-smaller-than-the-current-number/]
    - createTargetArray [按既定顺序创建目标数组][https://leetcode-cn.com/problems/create-target-array-in-the-given-order/]
    - decompressRLElist [解压缩编码列表][https://leetcode-cn.com/problems/decompress-run-length-encoded-list/]
    - defangIPaddr [IP地址无效化][https://leetcode-cn.com/problems/defanging-an-ip-address/]
    - getDecimaValue [二进制链表转整数][https://leetcode-cn.com/problems/convert-binary-number-in-a-linked-list-to-integer/]
    - minTimeToVisitAllPoints [访问所有点的最小时间][https://leetcode-cn.com/problems/minimum-time-visiting-all-points/]
    - deleteNode [删除当前节点][https://leetcode-cn.com/problems/delete-node-in-a-linked-list/]
    - deleteNode [删除当前节点 同上][https://leetcode-cn.com/problems/delete-middle-node-lcci/]
    - kthToLast [返回倒数第K个节点][https://leetcode-cn.com/problems/kth-node-from-end-of-list-lcci/] 有参考价值
    - printNumbers [打印从1到最大的n位数][https://leetcode-cn.com/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof/]
    - replaceSpace [替换空格][https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/]
    - sql [查找重复的电子邮箱][https://leetcode-cn.com/problems/duplicate-emails/]
    - countNegatives [统计有序矩阵中的负数][https://leetcode-cn.com/problems/count-negative-numbers-in-a-sorted-matrix/]
    - balancedStringSplit [分割平衡字符串][https://leetcode-cn.com/problems/split-a-string-in-balanced-strings/] 有参考价值 进出栈
    - distanceBetweenBusStops [公交站间的距离][https://leetcode-cn.com/problems/distance-between-bus-stops/]
    - mirrorTree [二叉树镜像][https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/] 二叉树一般使用递归
    - removeOuterParentheses [删除最外层的括号][https://leetcode-cn.com/problems/remove-outermost-parentheses/] 正则表达式不会
    - rangeSumBST [搜索二叉树][https://leetcode-cn.com/problems/range-sum-of-bst/] 二叉树需要 再学习一下 递归的思想
    - sortString [上升下降字符串][https://leetcode-cn.com/problems/increasing-decreasing-string/] 使用字典排序 sort((a, b) => a.charCodeAt() - b.charCodeAt()) 需要加深理解
    - invertTree [翻转二叉树][https://leetcode-cn.com/problems/invert-binary-tree/] 记住二叉树一般使用递归的方法
    - constructMaximumBinaryTree [最大二叉树][https://leetcode-cn.com/problems/maximum-binary-tree/] leetcode 对二叉树支持不好 bug多
    - reversePrint [反转节点][https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/] 链接同样 也是递归的解法 与二叉树解法类似
    - replaceElements [将每个元素替换为右侧最大的元素][https://leetcode-cn.com/problems/replace-elements-with-greatest-element-on-right-side/]
    - reverseList [反转链表][https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/] 最优解是双指针 原地反转
    - twitter [设计推特][https://leetcode-cn.com/problems/design-twitter/] 数据库设计
    - oddCells [奇数值单元格的数目][https://leetcode-cn.com/problems/cells-with-odd-values-in-a-matrix/]
    - bigCountry [大的国家][https://leetcode-cn.com/problems/big-countries/submissions/]
    - heightChecker [高度检查器][https://leetcode-cn.com/problems/height-checker/]
    - arrayPairSum [数组拆分][https://leetcode-cn.com/problems/array-partition-i/]
    

- Normal
    - maxIncreaseKeepingSkyline [保持城市的天际线][https://leetcode-cn.com/problems/max-increase-to-keep-city-skyline/]
    - TinyURL [TinyURL 的加密与解密][https://leetcode-cn.com/problems/encode-and-decode-tinyurl/]
    - sumNums [求1+2+...n][https://leetcode-cn.com/problems/qiu-12n-lcof/]
    - reverseWords [翻转字符串里的单词][https://leetcode-cn.com/problems/reverse-words-in-a-string/]
    - canCompleteCircuit [加油站][https://leetcode-cn.com/problems/gas-station/] 一次循环最优解
- Difficult
    - 暂无👍

