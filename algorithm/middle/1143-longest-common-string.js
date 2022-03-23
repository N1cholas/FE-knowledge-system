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
// 定义dp: dp[i][j] 表示前i个text1和前j个text2最长公共子序列
// 状态转移:
// f(i, j) = 1 + f(i - 1, j - 1) & text1[i - 1] === text2[j - 1]
// f(i, j) = max{ f(i - 1, j), f(i, j - 1) } & text1[i - 1] !== text2[j - 1]
// 边界: dp[0][0] = 0
var longestCommonSubsequence2 = function(text1, text2) {
    const n = text1.length
    const m = text2.length
    
    const dp = new Array(n + 1).fill(0).map(_ => new Array(m + 1).fill(0))
    
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= m; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1]
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    
    return dp[n][m]
};
