/**
 * @param {string} S
 * @return {string}
 */
var compressString = function(S) {
    if (S.length === 1) return S
    
    let cur = S.charAt(0)
    let count = 1
    let res = ''
    
    for (let i = 1; i < S.length; i++) {
        if (S.charAt(i) !== cur) {
            res += cur + count
            cur = S.charAt(i)
            count = 1
        } else {
            count++
        }
        
        if (i === S.length - 1) {
            res += cur + count
        }
    }
    
    return res.length >= S.length ? S : res
};
