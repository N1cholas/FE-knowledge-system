/**
 * @param {string} s
 * @return {number}
 */

// greed
// 贪心：尽可能分割最小的平衡字符串
var balancedStringSplit = function(s) {
    let ans = 0
    let counts = 0
    
    for(let i = 0, len = s.length; i < len; i++) {
        if (s.charAt(i) === 'L') {
            counts++
        } else {
            counts--
        }
        
        !counts && (ans++)
    }
    
    return ans
};
