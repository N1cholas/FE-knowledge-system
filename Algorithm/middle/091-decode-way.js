/**
 * @param {string} s
 * @return {number}
 */

// source https://leetcode-cn.com/problems/decode-ways/

// dynamic program
// 定义dp: dp[i]表示前i个字符解码的方案数
// 状态转移:
//   f(i) = f(i) + f(i - 1)
//   f(i) = f(i) + f(i - 2)
// 初始化: dp[i] = 0
// 边界: dp[0] = 1
var numDecodings = function(s) {
    const n = s.length
    
    const dp = new Array(n + 1).fill(0)
    
    dp[0] = 1
    
    for(let i = 1; i <= n; i++) {
        if (s.charAt(i - 1) !== '0') {
            dp[i] += dp[i - 1]
        }
        
        if (
            i > 1
            && s.charAt(i - 2) !== '0'
            && Number(s.substr(i - 2, 2)) <= 26
        ) {
            dp[i] += dp[i - 2]
        }
    }
    
    return dp[n]
};
