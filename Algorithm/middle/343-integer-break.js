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
var integerBreak2 = function(n) {
    const dp = new Array(n + 1).fill(-1)
    
    dp[1] = 1
    
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j])
        }
    }
    
    return dp[n]
};
