/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let n = x
    let res = 0
    
    while (n) {
        res = res * 10 + n % 10
        n = ~~(n / 10)
    }
    
    return res === x
};
