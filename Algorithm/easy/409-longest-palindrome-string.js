/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const map = new Map()
    let res = 0
    let palindromeCenter = 0
    
    for (let i = 0; i < s.length; i++) {
        const str = s.charAt(i)
        const v = map.get(str) || 0
        map.set(str, v + 1)
    }
    
    for (const value of map.values()) {
        res += ~~(value / 2) * 2
        
        if (!palindromeCenter && value % 2 === 1) {
            palindromeCenter = 1
        }
    }
    
    return palindromeCenter + res
};
