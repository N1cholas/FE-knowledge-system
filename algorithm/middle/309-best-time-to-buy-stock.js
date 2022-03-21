/**
 * @param {number[]} prices
 * @return {number}
 */
// dynamic program
// 重复的子问题: 今天股票最大收益可以从前一天转移过来
// 定义dp: 每一天维护三个状态，持有股票，不持有股票切处于冷冻期，不持有股票且不处于冷冻期
// 确定状态方程:
//  dp[i][0] = max{ dp[i - 1][0], -prices[i] + dp[i - 1][2] }
//  dp[i][1] = prices[i] + dp[i - 1][0]
//  dp[i][2] = max{ dp[i - 1][1], d[i - 1][2] }
// 确定边界:
//  dp[0][0] = -prices[0]
//  dp[0][1] = 0
//  dp[0][2] = 0

// 只能买入一次!!!不允许多次买入!!!
var maxProfit = function(prices) {
    const n = prices.length
    
    const dp = new Array(n).fill(0).map(() => new Array(3).fill(-Infinity))
    
    dp[0][0] = -prices[0] // 持有股票
    dp[0][1] = 0          // 不持有股票且处于冷冻期
    dp[0][2] = 0          // 不持有股票且不处于冷冻期
    
    for(let i = 1; i < n; i++) {
        dp[i][0] = Math.max(-prices[i] + dp[i - 1][2], dp[i - 1][0])
        dp[i][1] = prices[i] + dp[i - 1][0]
        dp[i][2] = Math.max(dp[i - 1][1], dp[i - 1][2])
    }
    
    return Math.max(dp[n - 1][1], dp[n - 1][2])
};
