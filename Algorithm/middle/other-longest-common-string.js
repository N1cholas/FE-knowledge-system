// 最长子序列
/**
 * @param {string} s1 字符串1
 * @param {string} s2 字符串2
 * @return {number}
 */

// memory search
function longestCommonString(s1, s2) {
    function LCS(s1, s2, m, n) {
        if (m < 0 || n < 0) {
            return 0
        }
        
        let res = 0
        
        if (s1.charAt(m) === s2.charAt(n)) {
            res = 1 + LCS(s1, s2, m - 1, n - 1)
        } else {
            res = Math.max(LCS(s1, s2, m - 1, n), LCS(s1, s2, m, n - 1))
        }
        
        return res
    }
    
    return LCS(s1, s2, s1.length - 1, s2.length - 1)
}

console.log(longestCommonString('ABCD', 'AEBD'))
