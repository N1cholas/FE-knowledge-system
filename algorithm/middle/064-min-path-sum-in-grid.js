/**
 * @param {number[][]} grid
 * @return {number}
 */

// dynamic program
// f(m,n) = grid[m][n] + min{f(m-1, n), f(m,n-1)}
// f(m,n)代表当前[m,n]的最小路径和
var minPathSum = function(grid) {
    const m = grid.length
    const n = grid[0].length
    
    const dp = new Array(m).fill(0).map(_ => new Array(n).fill(0))
    
    dp[0][0] = grid[0][0]
    
    for(let i = 1; i < m; i++) {
        dp[i][0] = grid[i][0] + dp[i - 1][0]
    }
    
    for(let i = 1; i < n; i++) {
        dp[0][i] = grid[0][i] + dp[0][i - 1]
    }
    
    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1])
        }
    }
    
    return dp[m - 1][n - 1]
};
