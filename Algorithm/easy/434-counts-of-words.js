/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let count = 0
    const formatStr = s.split('')
    
    for (let i = 0; i < formatStr.length; i++) {
        if ((i === 0 || s.charAt(i - 1) === ' ') && s.charAt(i) !== ' ') count++
    }
    
    return count
};
