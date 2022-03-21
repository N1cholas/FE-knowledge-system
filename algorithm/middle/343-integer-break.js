/**
 * @param {number} n
 * @return {number}
 */

// memory search
var integerBreak = function(n) {
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

// dynamic program
// 定义dp: dp[i] 表示组成数字i的最大乘积
// 确定状态方程: f(i) = max{ f(i), j * (i - j), j * f(i - j) } && 1 <= j < i
// 确定边界: f(0) = 0, f(1) = 1
var integerBreak2 = function(n) {
    const dp = new Array(n + 1).fill(0)
    
    dp[1] = 1
    
    for(let i = 2; i <= n; i++) {
        for(let j = 1; j < i; j++) {
            dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j])
        }
    }
    
    return dp[n]
};
