# leetCode

小小前端目标刷够 LeetCode 热门100 + 剑指 Offer 题目，附上简单的答题思路

* [🔥 LeetCode 热题 HOT 100](https://leetcode-cn.com/problem-list/2cktkvj/)
* [剑指 Offer（第 2 版）](https://leetcode-cn.com/problem-list/xb9nqhhg/)

## 目录结构

根据题目的解法或者数据结构分类，可能存在同一题目，多个不同的分类情况

* 数据结构
  * String 字符串
  * Array 数组
  * Tree 二叉树
  * Stack 栈
  * List 链表
  * Queue 队列
  * Hash 哈希表
* 算法分类
  * 递归
    * DFS 深度优先遍历
    * BFS 广度优先遍历
  * 回溯
  * 分治
  * 贪心算法
  * 动态规划
    * 记忆化搜索
    * 线性DP
    * 背包DP
  * 位运算
  * 排序
  * 

### 进度

128 / 175

> 已经通过的题目：128  
> 提交未通过的题目 4    
> 未完成的题目：47    
> 尝试过没有成功 12  


### 通过的题目 通过类型不同进行分类

> Simple 简单

- String

  - freqAlphabets [解码字母到整数映射](https://leetcode-cn.com/problems/decrypt-string-from-alphabet-to-integer-mapping/) fromCharCode charCodeAt 互相转化
  - generateTheString [生成每种字符都是奇数个的字符串](https://leetcode-cn.com/problems/generate-a-string-with-characters-that-have-odd-counts/)
  - reverseLeftWords [左旋转字符串](https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/)
  - strStr [实现 strStr()](https://leetcode-cn.com/problems/implement-strstr/)
  - reverseString [反转字符串](https://leetcode-cn.com/problems/reverse-string/)
  - reverseWords [反转字符串中的单词 Ⅲ](https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/)
  - titleToNumber [Excel 表序列号](https://leetcode-cn.com/problems/excel-sheet-column-number/)
  - toLowerCase [转换成小写字母](https://leetcode-cn.com/problems/to-lower-case/)
  - defangIPaddr [IP 地址无效化](https://leetcode-cn.com/problems/defanging-an-ip-address/)
  - replaceSpace [替换空格](https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/)
  - removeOuterParentheses [删除最外层的括号](https://leetcode-cn.com/problems/remove-outermost-parentheses/) 复杂题目值得参考
  - sortString [上升下降字符串](https://leetcode-cn.com/problems/increasing-decreasing-string/) 使用字典排序 sort((a, b) => a.charCodeAt() - b.charCodeAt()) 有参考价值

- Maths

  - isPalindrome [回文数字](https://leetcode-cn.com/problems/palindrome-number/)
  - numberOfSteps [将数字变成 0 的次数](https://leetcode-cn.com/problems/number-of-steps-to-reduce-a-number-to-zero/)
  - distributeCandies [分糖果](https://leetcode-cn.com/problems/distribute-candies/)
  - reverse [整数反转](https://leetcode-cn.com/problems/reverse-integer/)
  - twoSum [两数之和](https://leetcode-cn.com/problems/two-sum/)
  - numJewelsInStones [统计位数为偶数的数字](https://leetcode-cn.com/problems/find-numbers-with-even-number-of-digits/)
  - judgeCircle [机器人是否返回到原点](https://leetcode-cn.com/problems/robot-return-to-origin/)
  - findComplement [数字的补数](https://leetcode-cn.com/problems/number-complement/)
  - canWinNim [Nim game](https://leetcode-cn.com/problems/nim-game/)
  - subtractProductAndSum [证书的各位积和之差](https://leetcode-cn.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/)
  - findNumbers [统计位数为偶数的数字](https://leetcode-cn.com/problems/find-numbers-with-even-number-of-digits/)
  - printNumbers [打印从 1 到最大的 n 位数](https://leetcode-cn.com/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof/)
  - minCount [拿硬币](https://leetcode-cn.com/problems/na-ying-bi/)
  - hammingDistance [汉明的距离](https://leetcode-cn.com/problems/hamming-distance/) 值得参考 布克尼根运算法
  - maximum69Number [6 和 9 的最大数字组合](https://leetcode-cn.com/problems/maximum-69-number/)
  - minStartValue [求和得到的正数的最小值](https://leetcode-cn.com/problems/minimum-value-to-get-positive-step-by-step-sum/)
  - isHappy [快乐数](https://leetcode-cn.com/problems/happy-number/) 利用数组存起来猜测的数字 如果形成闭环 退出循环

- Array

  - peakIndexInMountainArray [山脉数组的峰顶索引](https://leetcode-cn.com/=problems/peak-index-in-a-mountain-array/])
  - removeDuplicates [删除数组的重复项](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/)
  - flipAndInvertImage [翻转图像](https://leetcode-cn.com/problems/flipping-an-image/)
  - containsDuplicate [存在重复的元素](https://leetcode-cn.com/problems/contains-duplicate/)
  - uniqueMorseRepresentations [唯一摩斯密码](https://leetcode-cn.com/problems/unique-morse-code-words/)
  - islandPerimeter [岛屿的周长](https://leetcode-cn.com/problems/island-perimeter/)
  - findSpecialInteger [找出数组中出现次数最多的数组](https://leetcode-cn.com/problems/element-appearing-more-than-25-in-sorted-array/)
  - tictactoe [找出井字棋的获胜者](https://leetcode-cn.com/problems/find-winner-on-a-tic-tac-toe-game/)
  - game [猜数字](https://leetcode-cn.com/problems/guess-numbers/)
  - smallerNumbersThanCurrent [有多少小于当前数字的数字](https://leetcode-cn.com/problems/how-many-numbers-are-smaller-than-the-current-number/)
  - createTargetArray [按既定顺序创建目标数组](https://leetcode-cn.com/problems/create-target-array-in-the-given-order/)
  - createTargetArray [按既定顺序创建目标数组](https://leetcode-cn.com/problems/create-target-array-in-the-given-order/)
  - decompressRLElist [解压缩编码列表](https://leetcode-cn.com/problems/decompress-run-length-encoded-list/)
  - minTimeToVisitAllPoints [访问所有点的最小时间](https://leetcode-cn.com/problems/minimum-time-visiting-all-points/)
  - countNegatives [统计有序矩阵中的负数](https://leetcode-cn.com/problems/count-negative-numbers-in-a-sorted-matrix/)
  - distanceBetweenBusStops [公交站间的距离](https://leetcode-cn.com/problems/distance-between-bus-stops/)
  - replaceElements [将每个元素替换为右侧最大的元素](https://leetcode-cn.com/problems/replace-elements-with-greatest-element-on-right-side/)
  - findTheDistanceValue [两个数组之间的距离值](https://leetcode-cn.com/problems/find-the-distance-value-between-two-arrays/)
  - isUnique [判断字符串是否唯一](https://leetcode-cn.com/problems/is-unique-lcci/)
  - RecentCounter [最近的请求次数](https://leetcode-cn.com/problems/number-of-recent-calls/) 不太明白题目的意思 抄答案了
  - oddCells [奇数值单元格的数目](https://leetcode-cn.com/problems/cells-with-odd-values-in-a-matrix/)
  - heightChecker [高度检查器](https://leetcode-cn.com/problems/height-checker/) 参考价值
  - arrayPairSum [数组拆分](https://leetcode-cn.com/problems/array-partition-i/)
  - luckyNumbers [幸运数字](https://leetcode-cn.com/problems/lucky-numbers-in-a-matrix/)
  - singleNumber [只出现一次的数字](https://leetcode-cn.com/problems/single-number/)
  - majorityElement [多数元素](https://leetcode-cn.com/problems/majority-element/)
  - moveZeroes [移动零](https://leetcode-cn.com/problems/move-zeroes/)
  - findDisappearedNumbers [找到数组中消失的数字](https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array/) 空间时间控制 在 O(n)
  - twoCitySchedCost [两地调度](https://leetcode-cn.com/problems/two-city-scheduling/)
  - findMaxConsecutiveOnes [最大连续 1 的个数](https://leetcode-cn.com/problems/max-consecutive-ones/)
  - runningSum [一维数组的动态和](https://leetcode-cn.com/problems/running-sum-of-1d-array/submissions/) 循环递归

- Sql

  - movie [有趣的电影](https://leetcode-cn.com/problems/not-boring-movies/)
  - Emails [查找重复的电子邮箱](https://leetcode-cn.com/problems/duplicate-emails/)
  - bigCountry [大的国家](https://leetcode-cn.com/problems/big-countries/submissions/)
  - wages [交换工资](https://leetcode-cn.com/problems/swap-salary/)
  - Merge [组合两个表格](https://leetcode-cn.com/problems/combine-two-tables/)

- ListNode
  - getDecimaValue [二进制链表转整数](https://leetcode-cn.com/problems/convert-binary-number-in-a-linked-list-to-integer/)
  - deleteNode [删除当前节点](https://leetcode-cn.com/problems/delete-node-in-a-linked-list/)
  - deleteNode [删除当前节点 同上](https://leetcode-cn.com/problems/delete-middle-node-lcci/)
  - kthToLast [返回倒数第 K 个节点](https://leetcode-cn.com/problems/kth-node-from-end-of-list-lcci/) 有参考价值 双指针解法
  - balancedStringSplit [分割平衡字符串](https://leetcode-cn.com/problems/split-a-string-in-balanced-strings/) 有参考价值 进出栈
  - reversePrint [反转节点](https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/) 链接同样 也是递归的解法 与二叉树解法类似
  - reverseList [反转链表](https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/) 最优解是双指针 原地反转
  - MyQueue [化栈为队列](https://leetcode-cn.com/problems/implement-queue-using-stacks-lcci/) 实现 用两个数组管理进出栈的 队列
  - CQueue [用两个栈实现队列](https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/) 使用两个数组 一个数组进栈 一个数组出栈

* Tree

  - kthLargest [二叉搜索树的最大 K 节点](https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/) 看答案的
  - mergeTrees [合并二叉树](https://leetcode-cn.com/problems/merge-two-binary-trees) 二叉树思路 原始函数的递归进行 参数是提示 进来先判断 然后走逻辑 最后返回节点
  - mirrorTree [二叉树镜像](https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/) 二叉树一般使用递归
  - rangeSumBST [搜索二叉树](https://leetcode-cn.com/problems/range-sum-of-bst/) 二叉树需要 再学习一下 递归的思想
  - invertTree [翻转二叉树](https://leetcode-cn.com/problems/invert-binary-tree/) 记住二叉树一般使用递归的方法
  - constructMaximumBinaryTree [最大二叉树](https://leetcode-cn.com/problems/maximum-binary-tree/) leetcode 对二叉树支持不好 bug 多
  - maxDepth [二叉树的深度](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)
  - sortedArrayToBST [最小高度树](https://leetcode-cn.com/problems/minimum-height-tree-lcci/) 看答案的
  - convertBST [把二叉树搜索树转换成累加树](https://leetcode-cn.com/problems/convert-bst-to-greater-tree/) 回溯算法
  - isSymmetric [对称二叉树](https://leetcode-cn.com/problems/symmetric-tree/)

* Object 面向对象编程

  - twitter [设计推特](https://leetcode-cn.com/problems/design-twitter/) 数据库设计
  - MyQueue [化栈为队列](https://leetcode-cn.com/problems/implement-queue-using-stacks-lcci/) 实现 用两个数组管理进出栈的 队列
  - CQueue [用两个栈实现队列](https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/) 使用两个数组 一个数组进栈 一个数组出栈
  - MyHash [设计哈希集合](https://leetcode-cn.com/problems/design-hashset/) 哈希表

* 动态规划

  - fib [斐波那契数](https://leetcode-cn.com/problems/fibonacci-number/) 斐波那契数
  - coinChange [零钱兑换](https://leetcode-cn.com/problems/coin-change/) 零钱兑换
  - change [零钱问题2](https://leetcode-cn.com/problems/coin-change-2/submissions/)
  - rob [打家劫舍](https://leetcode-cn.com/problems/house-robber/) 经典动态规划
  - rob2 [打家劫舍 II](https://leetcode-cn.com/problems/house-robber-ii//) 房子围一圈
  - climbStairs [爬楼梯](https://leetcode-cn.com/problems/climbing-stairs/submissions/) 爬楼梯总共有多少种可能
  - maxProfit [买股票的最佳时机](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/) 只能购买卖出1次
  - maxProfit2 [买卖股票的最佳时机 II](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/) 可以购买卖出多次，但是不能多线操作
  - maxProfit3 [买卖股票的最佳时机 III](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/) 可以同时做两笔交易
  - maxProfit4 [买卖股票的最佳时机 IV](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/) 可以做K次交易 算法是相同的
  - maxProfit5 [最佳买卖股票时机含冷冻期](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/) 只能做一次交易 卖出股票以后第二天不能再买入股票
  - maxProfit6 [买卖股票的最佳时机含手续费](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/) 买股票的最佳时机会 并且需要手续费
  - lengthOfLIS [最长上升子序列](https://leetcode-cn.com/problems/longest-increasing-subsequence/) 二分查找法 动态规划经典算法
  - maxSubArray [最大子序和](https://leetcode-cn.com/problems/maximum-subarray/) 最大子数组
  - canPartition [分割等和子集合](https://leetcode-cn.com/problems/partition-equal-subset-sum/)
  - minDistance [编辑距离](https://leetcode-cn.com/problems/edit-distance/) 太难了 未解决

> Normal 中等难度

- Normal
  - maxIncreaseKeepingSkyline [保持城市的天际线](https://leetcode-cn.com/problems/max-increase-to-keep-city-skyline/)
  - TinyURL [TinyURL 的加密与解密](https://leetcode-cn.com/problems/encode-and-decode-tinyurl/)
  - sumNums [求 1+2+...n](https://leetcode-cn.com/problems/qiu-12n-lcof/)
  - reverseWords [翻转字符串里的单词](https://leetcode-cn.com/problems/reverse-words-in-a-string/)
  - canCompleteCircuit [加油站](https://leetcode-cn.com/problems/gas-station/) 一次循环最优解
  - [换位置](https://leetcode-cn.com/problems/exchange-seats/) mysql 语法学习 list
  - pow [Pow(x, n)](https://leetcode-cn.com/problems/powx-n/) 实现 pow 方法
  - mergeTwoList [合并两个链表](https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/) 合并两个链表
  - numIslands [岛屿的数量](https://leetcode-cn.com/problems/number-of-islands/) 推荐的算法
  - rightSideView [二叉树的右视图](https://leetcode-cn.com/problems/binary-tree-right-side-view/)
  - subsets [子集](https://leetcode-cn.com/problems/subsets/) 循环递归方法
  - permute [全排列](https://leetcode-cn.com/problems/permutations/) dfs 算法 深度优先算法 广度优先算法
  - generateParenthesis [括号生成](https://leetcode-cn.com/problems/generate-parentheses/)
  - inOrderTraversal [二叉树中序遍历](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/)
  - maxArea [盛最多水的容器](https://leetcode-cn.com/problems/container-with-most-water/submissions/)
  - levelOrder [二叉树的层序遍历](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/)
  - restoreIpAddresses [复原 IP 地址](https://leetcode-cn.com/problems/restore-ip-addresses/)

> Difficult

    + Array
        - 暂无👍

#### 总结

| 算法题类型          | 解法思路                                                                      | 原因                                                                                                                                  |
| ------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| String              | 正则表达式 转化成数组判断 效率低                                              | 正则匹配难度大 转化是数组判断效率低下 数据类型转换浪费性能                                                                            |
| Maths               | 基础数学方法                                                                  | 数学逻辑解题方法 (包含 字符串数组的解题思路) 阅读理解                                                                                 |
| Array               | 二分法查找(递归) 排序 去重 嵌套循环(暴力解题) 循环递归嵌套 合理使用 Array.API | 考虑时间和空间复杂度 嵌套循环的时间复杂度是 O(n^2) 优化方向是使用 O(1)的复杂度实现 O(1)<O(logn)<O(n)<O(nlogn)<O(n²)<O(n³)<O(2ⁿ)<O(n!) |  |
| Tree                | 递归 dfs(深度优先遍历) bfs(广度优先遍历)                                      | 二叉树的数据结构适合使用递归 常见树的层次遍历有 DFS 和 BFS 两种方法                                                                   |
| Object 面向对象编程 | 业务向                                                                        | 阅读理解题目                                                                                                                          |
| ListNode            | 递归 双指针                                                                   | 不熟悉递归算法 无应用                                                                                                                 |
| Sql                 | mySql 语法糖                                                                  | 目前碰到的题目不算太难                                                                                                                |

#### 金句

递归的是人，迭代的是神。  
递归二叉树，一般操作  
深度遍历二叉树，不会的操作 dfs 配合栈一起使用
