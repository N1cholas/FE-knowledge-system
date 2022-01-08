/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let si = 0
    let ti = 0
    
    while (ti < t.length) {
        if (s.charAt(si) === t.charAt(ti)) {
            si++
        }
        ti++
    }
    
    return si === s.length
};
