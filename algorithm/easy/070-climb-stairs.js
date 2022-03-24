/**
 * @param {number} n
 * @return {number}
 */

// source https://leetcode-cn.com/problems/climbing-stairs/

// dynamic program
// 定义dp: dp[i] 表示到达i阶的方案数
// 状态转移: f(i) = f(i - 1) + f(i - 2)
// 初始化: dp[i] = 0
// 边界: dp[0] = 1 & dp[1] = 1
var climbStairs = function(n) {
    const dp = new Array(n + 1).fill(0)
    
    dp[0] = 1
    
    dp[1] = 1
    
    for(let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    
    return dp[n]
};

// memory search
var climbStairs2 = function(n) {
    function tryClimb(n) {
        if (n === 1 || n === 0) return 1
        
        if (memo[n] !== -1) return memo[n]
        
        let res = tryClimb(n - 1) + tryClimb(n - 2)
        
        memo[n] = res
        
        return res
    }
    
    const memo = new Array(n + 1).fill(-1)
    
    return tryClimb(n)
};
