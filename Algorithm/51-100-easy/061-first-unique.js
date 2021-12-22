/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
    const map = new Map()
    
    for (let i = 0; i < s.length; i++) {
        const cur = s.charAt(i)
        
        if (map.has(cur)) map.set(cur, map.get(cur) + 1)
        else map.set(cur, 1)
    }
    
    for (let j = 0; j < s.length; j++) {
        if (map.get(s.charAt(j)) === 1) return s.charAt(j)
    }
    
    return ' '
};
