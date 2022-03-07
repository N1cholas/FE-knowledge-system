/**
 * @param {number} n
 * @return {number}
 */

// memory search
var climbStairs = function(n) {
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

// dynamic program
// f(n) = f(n - 1) + f(n - 2)
// f(1) = 1
// f(0) = 1
var climbStairs2 = function(n) {
    const dp = new Array(n + 1).fill(0)
    
    dp[0] = 1
    dp[1] = 1
    
    for(let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    
    return dp[n]
};
