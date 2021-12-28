/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    const formatS = s.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt())
    const formatT = t.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt())
    
    for (let i = 0; i < formatS.length; i++) {
        if (formatS[i] !== formatT[i]) {
            return false
        }
    }
    
    return true
};
