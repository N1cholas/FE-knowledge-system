/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// memory search
var uniquePaths = function(m, n) {
    function dfs(m, n, dp) {
        if (m === 0 || n === 0) return 1
        
        if (dp[m][n] !== -1) return dp[m][n]
        
        const res = dfs(m - 1, n, dp) + dfs(m, n - 1, dp)
        
        return dp[m][n] = res
    }
    
    const dp = []
    
    for (let i = 0; i < m; i++) {
        const cur = []
        for (let j = 0; j < n; j++) {
            cur.push(-1)
        }
        dp.push(cur)
    }
    
    return dfs(m - 1, n - 1, dp)
};

// dynamic program
var uniquePaths2 = function(m, n) {
    const dp = []
    
    for (let i = 0; i < m; i++) {
        const cur = []
        for (let j = 0; j < n; j++) {
            cur.push(-1)
        }
        dp.push(cur)
    }
    
    for (let i = 0; i < n; i++) {
        dp[0][i] = 1
    }
    
    for (let i = 0; i < m; i++) {
        dp[i][0] = 1
    }
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    
    return dp[m - 1][n - 1]
};
