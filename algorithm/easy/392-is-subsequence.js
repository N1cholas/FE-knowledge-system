/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// greed
var isSubsequence = function(s, t) {
    let ti = 0
    let si = 0
    
    while (ti < t.length) {
        if (s.charAt(si) === t.charAt(ti)) {
            si++
        }
        ti++
    }
    
    return si === s.length
};
