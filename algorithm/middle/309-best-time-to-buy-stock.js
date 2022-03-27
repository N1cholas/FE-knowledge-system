/**
 * @param {number[]} prices
 * @return {number}
 */

// source https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/

// dynamic program
// 定义dp:
//   dp[i][0] 表示第i天 持有股票 的收益
//   dp[i][1] 表示第i天 不持有股票且处于冷冻期 的收益
//   dp[i][2] 表示第i天 不持有股票且不处于冷冻期 的收益
// 状态转移:
//   dp[i][0] = max{ -prices[i] + dp[i - 1][2], dp[i - 1][0] }
//   dp[i][1] = prices[i] + dp[i - 1][0]
//   dp[i][2] = max{ dp[i - 1][1], dp[i - 1][2] }
// 初始化 & 边界:
//   dp[0][0] = -prices[0]
//   dp[0][1] = 0
//   dp[0][2] = 0

var maxProfit = function(prices) {
    const n = prices.length
    
    const dp = new Array(n).fill(0).map(_ => new Array(3).fill(0))
    
    dp[0][0] = -prices[0]
    dp[0][1] = 0
    dp[0][2] = 0
    
    for(let i = 1; i < n; i++) {
        dp[i][0] = Math.max(-prices[i] + dp[i - 1][2], dp[i - 1][0])
        dp[i][1] = prices[i] + dp[i - 1][0]
        dp[i][2] = Math.max(dp[i - 1][1], dp[i - 1][2])
    }
    
    return Math.max(dp[n - 1][1], dp[n - 1][2])
};
