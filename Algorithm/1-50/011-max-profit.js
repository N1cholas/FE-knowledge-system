/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let lowestPrice = Infinity
    let maxValue = 0
    
    for(let i = 0; i < prices.length; i++) {
        if (prices[i] < lowestPrice) {
            lowestPrice = prices[i]
        } else {
            maxValue = Math.max(maxValue, prices[i] - lowestPrice)
        }
    }
    
    return maxValue
};
