/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    let res = ''
    
    for (let i = 0; i < s.length; i++) {
        const str = s.charAt(i)
        if (str === ' ') res += '%20'
        else res += str
    }
    
    return res
};
