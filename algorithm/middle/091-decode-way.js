/**
 * @param {string} s
 * @return {number}
 */

// dynamic program
// dp[i]表示前i个字符解码总数，边界为0个字符的解码数是1
// 状态转移方程:
// when s[n] != '0'
    // f(n)=f(n)+f(n-1)
// when s[n - 1] != '0' & s[n - 1] * 10 + s[n] <= 26
    // f(n)=f(n)+f(n-2)
var numDecodings = function(s) {
        const n = s.length
        
        const dp = new Array(n + 1).fill(0)
        
        dp[0] = 1
        
        for(let i = 1; i <= n; i++) {
            if (Number(s.charAt(i - 1)) !== 0) {
                dp[i] += dp[i - 1]
            }
            
            if (
                i > 1
                && Number(s.charAt(i - 2)) !== 0
                && Number(s.substr(i - 2, 2)) <= 26
            ) {
                dp[i] += dp[i - 2]
            }
        }
        
        return dp[n]
    };
