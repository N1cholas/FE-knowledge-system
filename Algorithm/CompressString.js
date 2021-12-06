/**
 * @param {string} S
 * @return {string}
 */
var compressString = function(S) {
    let curStr = S.charAt(0)
    let count = 1
    let res = ''
    
    for (let i = 1; i < S.length; i++) {
        if (S.charAt(i) !== curStr) {
            res += curStr + count
            curStr = S.charAt(i)
            count = 1
        } else {
            count++
        }
    }
    
    res += curStr + count
    
    return res.length >= S.length ? S : res
};
