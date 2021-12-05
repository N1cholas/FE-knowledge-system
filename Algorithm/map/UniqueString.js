/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function(astr) {
    const map = new Map()
    
    for (let i = 0, len = astr.length; i < len; i++) {
        const cur = astr[i]
        if (map.has(cur)) map.set(cur, map.get(cur) + 1)
        else map.set(cur, 1)
    }
    
    for (const [key, value] of map.entries()) {
        if (value !== 1) return false
    }
    
    return true
};
