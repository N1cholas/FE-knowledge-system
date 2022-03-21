/**
 * @param {number} n
 * @return {number}
 */

// memory search
var numSquares = function(n) {
    function trySquares(n) {
        if (n <= 0) {
            return 0
        }
        
        if (memo[n] !== Infinity) return memo[n]
        
        let res = Infinity
        
        for (let i = 1; n - i * i >= 0; i++) {
            res = Math.min(res, 1 + trySquares(n - i * i))
        }
        
        memo[n] = res
        
        return res
    }
    
    const memo = new Array(n + 1).fill(Infinity)
    
    return trySquares(n)
};

// dynamic program
// f(i)=min{f(i), 1 + f(i - j * j)} j => [1, 4, 9, 16...j * j]
// f(i)表示当前n的最少的完全平方数
// 0其实是完全平方数，但是这道题0不作为完全平方数
var numSquares2 = function(n) {
    const dp = new Array(n + 1).fill(Infinity)
    
    dp[0] = 0
    
    for(let i = 1; i <= n; i++) {
        for(let j = 1; i - j * j >= 0; j++) {
            dp[i] = Math.min(dp[i], 1 + dp[i - j * j])
        }
    }
    
    return dp[n]
};
