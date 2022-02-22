/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let counts = 0
    let ans = 0
    
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === 'L') {
            counts++
        } else {
            counts--
        }
        
        if (counts === 0) ans++
    }
    
    return ans
};
