/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const map = new Map()
    
    for (let i = 0; i < s.length; i++) {
        const cur  = s.charAt(i)
        
        if (map.has(cur)) {
            map.set(cur, map.get(cur) + 1)
        } else {
            map.set(cur, 1)
        }
    }
    
    for (let i = 0; i < s.length; i++) {
        const cur = s.charAt(i)
        
        if (map.get(cur) === 1) {
            return i
        }
    }
    
    return -1
};
