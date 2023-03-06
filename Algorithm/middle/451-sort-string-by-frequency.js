/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const map = new Map()
    
    for (let i = 0; i < s.length; i++) {
        const cur = s.charAt(i)
        
        if (map.get(cur) > 0) {
            map.set(cur, map.get(cur) + 1)
        } else {
            map.set(cur, 1)
        }
    }
    
    const arr = [...map.keys()]
    
    arr.sort((a, b) => map.get(b) - map.get(a))
    
    return arr.map(key => {
        let counts = map.get(key)
        let res = ''
        while (counts--) {
            res += key
        }
        return res
    }).join('')
};
