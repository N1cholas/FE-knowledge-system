/**
 * @param {number} n
 * @return {number}
 */

// source https://leetcode-cn.com/problems/integer-break/

// dynamic program
// 定义dp: dp[i] 表示整数i的最大乘积
// 状态转移:
//   f(i) = max{ f(i), j * (i - j), j * f(i - j) }
//   & 0 < j < i
// 初始化: dp[i] = 0
// 边界: dp[2] = 1
var integerBreak = function(n) {
    const dp = new Array(n + 1).fill(0)
    
    dp[2] = 1
    
    for(let i = 3; i <= n; i++) {
        for(let j = 1; j < i; j++) {
            dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j])
        }
    }
    
    return dp[n]
};

// memory search
var integerBreak2 = function(n) {
    function breakInt(n) {
        if (n === 1) return 1;
        
        if (memo[n] !== -1) return memo[n]
        
        let res = -1
        for (let i = 1; i < n; i++) {
            res = Math.max(res, i * (n - i), i * integerBreak(n - i))
        }
        
        memo[n] = res
        return res
    }
    
    const memo = new Array(n + 1).fill(-1)
    
    return breakInt(n)
};
