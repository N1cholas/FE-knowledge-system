/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let left = 0
    let right = n
    
    while (left <= right) {
        const mid = Math.floor((right - left) / 2) + left
        
        if (mid * (mid + 1) < 2 * n) {
            left = mid + 1
        } else if (mid * (mid + 1) > 2 * n) {
            right = mid - 1
        } else {
            return mid
        }
    }
    
    return left - 1
};
