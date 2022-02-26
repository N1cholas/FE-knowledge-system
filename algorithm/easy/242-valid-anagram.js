/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    
    const map1 = new Map()
    
    for (let i = 0; i < s.length; i++) {
        const cur = s.charAt(i)
        
        if (map1.has(cur)) {
            map1.set(cur, map1.get(cur) + 1)
        } else {
            map1.set(cur, 1)
        }
    }
    
    const map2 = new Map()
    
    for (let i = 0; i < t.length; i++) {
        const cur = t.charAt(i)
        
        if (map2.has(cur)) {
            map2.set(cur, map2.get(cur) + 1)
        } else {
            map2.set(cur, 1)
        }
    }
    
    for (const [key, value] of map1) {
        if (!map2.has(key) || map2.get(key) !== value) return false
    }
    
    return true
};

console.log(isAnagram('car', 'rat'))
