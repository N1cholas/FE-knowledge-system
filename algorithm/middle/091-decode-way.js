/**
 * @param {string} s
 * @return {number}
 */

// dynamic program
// 状态转移方程:
// when s[n] != '0'
    // f(n)=f(n)+f(n-1)
// when s[n - 1] != '0' & s[n - 1] * 10 + s[n] <= 26
    // f(n)=f(n)+f(n-2)
var numDecodings = function(s) {
    const dp = new Array(s.length + 1).fill(0)
    dp[0] = 1
    
    for (let i = 1; i <= s.length; i++) {
        // 当前解码使用1个字符
        // 所以[0, i]的解码数等于f(i) + f(i-1)
        if (s.charAt(i - 1) !== '0') {
            dp[i] += dp[i - 1]
        }
        // 当前解码使用两个字符
        // 所以[0, i]的解码数等于f(i) + f(i-2)
        if (
            i > 1
            && s.charAt(i - 2) !== '0'
            && (10 * Number(s.charAt(i - 2)) + Number(s.charAt(i - 1))) <= 26
        ) {
            dp[i] += dp[i - 2]
        }
    }
    
    return dp[s.length]
};
