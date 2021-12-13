/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    const formatStr = s.split('')
    let res = 0
    
    for (let i = 0; i < formatStr.length; i++) {
        if ((i === 0 || formatStr[i - 1] === ' ') && formatStr[i] !== ' ') res++
    }
    
    return res
};
