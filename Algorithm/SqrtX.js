/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0
    let right = x

    while (left <= right) {
        const mid = Math.floor((right - left) / 2) + left

        if (mid * mid <= x) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return left - 1
};
