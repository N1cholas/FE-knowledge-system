/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let left = 1
    let right = n
    
    while (left <= right) {
        const mid = ~~((right - left) / 2) + left
        
        if (mid * (mid + 1) <= 2 * n) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    
    return left - 1
};
