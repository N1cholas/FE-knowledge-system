/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let res = 0
    
    while (x) {
        const cur = res * 10 + x % 10
        if (cur > Math.pow(2, 31) - 1 || cur < Math.pow(-2, 31)) return 0
        else res = cur
        x = ~~(x / 10)
    }
    
    return res
};
