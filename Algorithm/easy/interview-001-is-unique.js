/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function(astr) {
    const set = new Set()
    
    for (let i = 0; i < astr.length; i++) {
        const cur = astr.charAt(i)
        if (set.has(cur)) return false
        else set.add(cur)
    }
    
    return true
};
