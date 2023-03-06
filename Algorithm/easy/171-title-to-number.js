/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let ans = 0
    let mul = 1
    
    for (let i = columnTitle.length - 1; i >= 0; i--) {
        const k = columnTitle.charAt(i).charCodeAt() - 64
        
        ans += k * mul
        
        mul *= 26
    }
    
    return ans
};
