/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0
    let right = x
    let res = 0
    
    while (left <= right) {
        const mid = Math.floor((right - left) / 2) + left
        
        const cur = Math.pow(mid, 2)
        
        if (cur < x) {
            left = mid + 1
        } else if (cur > x) {
            right = mid - 1
        } else {
            return mid
        }
    }
    
    return left - 1
};
