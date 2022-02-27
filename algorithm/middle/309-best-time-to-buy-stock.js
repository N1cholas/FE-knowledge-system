/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const dp = []
    const n = prices.length
    
    for(let i = 0; i < n; i++) {
        dp.push(new Array(3).fill(0))
    }
    
    dp[0][0] = -prices[0] // 持有股票
    dp[0][1] = 0          // 不持有股票且没有卖出
    dp[0][2] = 0          // 不持有股票且卖出
    
    for(let i = 1; i < n; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], -prices[i] + dp[i - 1][1])
        dp[i][1] = Math.max(dp[i - 1][2], dp[i - 1][1])
        dp[i][2] = prices[i] + dp[i - 1][0]
    }
    
    return Math.max(dp[n - 1][1], dp[n - 1][2])
};
