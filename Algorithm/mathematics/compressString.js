/**
 * @param {string} S
 * @return {string}
 */
var compressString = function(S) {
    let res = ''
    let curStr = S.charAt(0)
    let curStrCounts = 1
    
    for (let i = 1; i < S.length; i++) {
        if (S.charAt(i) !== curStr) {
            res += curStr + curStrCounts
            
            curStr = S.charAt(i)
            curStrCounts = 1
        } else {
            curStrCounts++
        }
    }
    
    res += curStr + curStrCounts
    
    return res.length < S.length ? res : S
};
