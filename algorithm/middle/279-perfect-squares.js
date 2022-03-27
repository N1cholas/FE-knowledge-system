/**
 * @param {number} n
 * @return {number}
 */

// dynamic program
// 定义dp: dp[i]表示整数i的最小完全平方数数量
// 状态转移:
//   f(i) = min{ f(i), 1 + f(i - j * j) }
//   & j in [1, 2, 3, ... , i]
//   & (i - j * j) >= 0
// 初始化: dp[i] = Infinity
// 边界: dp[0] = 0
var numSquares = function(n) {
    const dp = new Array(n + 1).fill(Infinity)
    
    dp[0] = 0
    
    for(let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            if (i - j * j >= 0) {
                dp[i] = Math.min(dp[i], 1 + dp[i - j * j])
            } else {
                break
            }
        }
    }
    
    return dp[n]
};

// memory search
var numSquares2 = function(n) {
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
