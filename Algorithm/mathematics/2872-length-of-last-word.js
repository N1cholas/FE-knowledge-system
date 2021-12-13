/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let len = 0
    
    for (let i = s.length - 1; i >= 0; i--) {
        if (s.charAt(i) === ' ' && len !== 0) break
        else if (s.charAt(i) !== ' ') len++
    }
    
    return len
};
