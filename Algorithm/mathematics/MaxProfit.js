/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let low = Number.MAX_SAFE_INTEGER
    let maxValue = 0
    
    for (let i = 0, len = prices.length; i < len; i++) {
        if (prices[i] <= low) {
            low = prices[i]
        } else {
            maxValue = Math.max(maxValue, prices[i] - low)
        }
    }
    
    return maxValue
};
