/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0
    let current = prices[0]
    
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] <= current) {
            current = prices[i]
        } else {
            max = Math.max(max, prices[i] - current)
        }
    }
    
    return max
};
