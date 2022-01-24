/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let l = 0
    let r = x
    
    while (l <= r) {
        const mid = ~~((r - l) / 2) + l
        const cur = mid ** 2
        
        if (cur < x) {
            l = mid + 1
        } else if (cur > x) {
            r = mid - 1
        } else {
            return mid
        }
    }
    
    return l - 1
};
