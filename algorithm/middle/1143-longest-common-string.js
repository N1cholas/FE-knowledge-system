/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

// LCS(s1, s2, m, n) 获取s1上[0...m]和获取s2[0...n]的最长公共子序列
// s1[m] === s2[n] => LCS(s1, s2, m, n) = 1 + LCS(s1, s2, m - 1, n - 1)
// s1[m] !== s2[n] => LCS(s1, s2, m, n) = max(LCS(s1, s2, m - 1, n), LCS(s1, s2, m, n - 1))

// memory search
var longestCommonSubsequence = function(text1, text2) {
    function LCS(s1, s2, m, n) {
        if (m < 0 || n < 0) {
            return 0
        }
        
        if (memo.has(`${m}-${n}`)) return memo.get(`${m}-${n}`)
        
        let res = 0
        if (s1[m] === s2[n]) {
            res = 1 + LCS(s1, s2, m - 1, n - 1)
        } else {
            res = Math.max(LCS(s1, s2, m - 1, n), LCS(s1, s2, m, n - 1))
        }
        
        memo.set(`${m}-${n}`, res)
        
        return res
    }
    
    const memo = new Map()
    
    return LCS(text1, text2, text1.length - 1, text2.length - 1)
};

// dynamic program
// dp[i][j]代表text1[0, i]和text2[0, j]范围内的最大LCS，所以i === 0 && j === 0是无意义的也是边界
var longestCommonSubsequence2 = function(text1, text2) {
    const n1 = text1.length
    const n2 = text2.length
    const dp = new Array(n1 + 1).fill(0)
        .map(_ => new Array(n2 + 1).fill(0))
    
    for(let i = 1; i <= n1; i++) {
        for(let j = 1; j <= n2; j++) {
            if (text1.charAt(i - 1) === text2.charAt(j - 1)) {
                dp[i][j] = 1 + dp[i - 1][j - 1]
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    
    return dp[n1][n2]
};
