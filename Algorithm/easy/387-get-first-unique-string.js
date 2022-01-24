/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const map = new Map()
    
    for (let i = 0; i < s.length; i++) {
        const cur = s.charAt(i)
        
        const v = map.get(cur) || 0
        map.set(cur, v + 1)
    }
    
    for (let i = 0; i < s.length; i++) {
        if (map.get(s.charAt(i)) === 1) return i
    }
    
    return -1
};
