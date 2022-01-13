/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const map = new Map()
    const formatStr = s.split(' ')
    const used = []
    
    if (pattern.length !== formatStr.length) return false
    
    for (let i = 0, len = pattern.length; i < len; i++) {
        const cur = pattern.charAt(i)
        
        if (map.has(cur)) {
            if (map.get(cur) !== formatStr[i]) return false
        } else {
            if (used.indexOf(formatStr[i]) !== -1) {
                return false
            } else {
                map.set(cur, formatStr[i])
                used.push(formatStr[i])
            }
        }
    }
    
    return true
};

console.log(wordPattern('abba', 'dog dog dog dog'))
