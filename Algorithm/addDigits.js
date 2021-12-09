/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if (num === 0) return 0
    
    let res = 0
    
    while (num) {
        res += num % 10
        
        num = ~~(num / 10)
        
        if (num === 0) {
            if (res < 10) {
                return res
            } else {
                num = res
                res = 0
            }
        }
    }
};
