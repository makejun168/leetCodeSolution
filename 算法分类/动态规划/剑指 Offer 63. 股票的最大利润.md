假设把某股票的价格按照时间先后顺序存储在数组中，请问买卖该股票一次可能获得的最大利润是多少？

```
输入: [7,1,5,3,6,4]
输出: 5
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
```


```
输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
```


### 利用 dp 动态规划

```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (!prices.length) return 0
    let dp = new Array(prices.length - 1).fill(0);
    
    // 不能在第一天就 卖出去赚钱
    dp[0] = 0;
    
    // 当天的最大的利润 等于 前面某天的买入价 - 当天的卖出价钱
    
    // 构建 dp
    for (let i = 0; i < dp.length; i++) {
        // 获取后面价值中利润最大的一天
        let currentMax = Math.max(...prices.slice(i + 1));
        dp[i] = prices[i] > currentMax ? 0 : currentMax - prices[i];
    }
    
    // 返回 dp 的最大利润
    return Math.max(...dp);
};

maxProfit([1,2]);
```


### 状态压缩

```js
var maxProfit = function(prices) {
    if (!prices.length) return 0
    let cost = Infinity;
    let profit = 0;
    for (let price of prices) {
        cost = Math.min(cost, price);
        profit = Math.max(profit, price - cost);
    }
    return profit;
};
```