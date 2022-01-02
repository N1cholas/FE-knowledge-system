/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const dp = []
    
    for (let i = 0; i < prices.length; i++) {
        dp.push(new Array(3).fill(0))
    }
    
    // 0 持有
    // 1 不持有并且当天没有卖出
    // 2 不持有并且当天卖出
    dp[0][0] = -prices[0]
    dp[0][1] = 0
    dp[0][2] = 0
    
    for (let i = 1; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], -prices[i] + dp[i - 1][1])
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][2])
        dp[i][2] = dp[i - 1][0] + prices[i]
    }
    
    const lastIndex = prices.length - 1
    
    return Math.max(dp[lastIndex][1], dp[lastIndex][2])
};
