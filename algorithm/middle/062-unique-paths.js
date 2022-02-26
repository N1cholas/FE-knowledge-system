/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// 子问题：当前的所有路径等于上一格路径和加上左一格路径和

// memory search
var uniquePaths = function(m, n) {
    const memo = []
    
    for(let i = 0; i < m; i++) {
        const row = []
        for(let j = 0; j < n; j++) {
            row.push(-1)
        }
        memo.push(row)
    }
    
    function dfs(m, n, memo) {
        if (m === 0 || n === 0) return 1
        
        if (memo[m][n] !== -1) return memo[m][n]
        
        let res = dfs(m - 1, n, memo) + dfs(m, n - 1, memo)
        
        memo[m][n] = res
        
        return res
    }
    
    return dfs(m - 1, n - 1, memo)
};

// dynamic program
// f(m,n) = f(m - 1, n) + f(m, n - 1)
// f(m,n)表示当前格[m,n]的路径和
var uniquePaths2 = function(m, n) {
    const dp = []
    
    for(let i = 0; i < m; i++) {
        const row = []
        for(let j = 0; j < n; j++) {
            row.push(-1)
        }
        dp.push(row)
    }
    
    for(let i = 0; i < m; i++) {
        dp[i][0] = 1
    }
    
    for(let i = 0; i < n; i++) {
        dp[0][i] = 1
    }
    
    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    
    return dp[m - 1][n - 1]
};
