/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const map = new Map()
    
    for (let i = 0; i < s.length; i++) {
        const cur = s.charAt(i)
        
        if (map.has(cur)) map.set(cur, map.get(cur) + 1)
        else map.set(cur, 1)
    }
    
    for (let j = 0; j < s.length; j++) {
        const cur = s.charAt(j)
        
        if (map.get(cur) === 1) return j
    }
    
    return -1
};
