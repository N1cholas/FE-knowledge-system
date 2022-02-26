/**
 * @param {number} n
 * @return {number}
 */

// memory search
var numSquares = function(n) {
    function squareSum(n) {
        if (n === 0) {
            return 0
        }
        
        if (memo[n] !== -1) return memo[n]
        
        let res = -1
        for (let i = 1; n - i * i >= 0; i++) {
            res = Math.min(res, 1 + squareSum(n - i * i))
        }
        
        memo[n] = res
        
        return res
    }
    
    const memo = new Array(n + 1).fill(-1)
    
    return squareSum(n)
};

// dynamic program
var numSquares2 = function(n) {
    const dp = new Array(n + 1).fill(Infinity)
    
    dp[0] = 0
    
    for (let i = 1; i <= n; i++) {
        for (let j = 1; i - j * j >= 0; j++) {
            dp[i] = Math.min(dp[i], 1 + dp[i - j * j])
        }
    }
    
    return dp[n]
};
