/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let m1 = {}
    let m2 = {}
    
    for (let i = 0; i < s.length; i++) {
        const x = s.charAt(i)
        const y = t.charAt(i)
        
        if ((m1[x] && m1[x] !== y) || (m2[y] && m2[y] !== x)) {
            return false
        }
    
        m1[x] = y
        m2[y] = x
    }
    
    return true
};
