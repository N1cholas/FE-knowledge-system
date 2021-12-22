/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const map = new Map()
    let centerStr = 0
    let len = 0
    
    for (let i = 0; i < s.length; i++) {
        const cur = s.charAt(i)
        
        if (map.has(cur)) map.set(cur, map.get(cur) + 1)
        else map.set(cur, 1)
    }
    
    for (const value of map.values()) {
        len += ~~(value / 2) * 2
        
        if (!centerStr && value % 2 === 1) {
            centerStr = 1
        }
    }
    
    return len + centerStr
};
