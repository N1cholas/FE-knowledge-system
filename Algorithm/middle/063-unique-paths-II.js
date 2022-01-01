/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if (obstacleGrid[0][0]) return 0
    const dp = []
    const m = obstacleGrid.length
    const n = obstacleGrid[0].length
    
    for (let i = 0; i < m; i++) {
        const cur = []
        for (let j = 0; j < n; j++) {
            cur.push(0)
        }
        dp.push(cur)
    }
    
    dp[0][0] = 1
    
    for (let i = 1; i < n; i++) {
        if (!obstacleGrid[0][i]) {
            dp[0][i] = dp[0][i - 1]
        }
    }
    
    for (let i = 1; i < m; i++) {
        if (!obstacleGrid[i][0]) {
            dp[i][0] = dp[i - 1][0]
        }
    }
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j]) continue
            
            dp[i][j] = dp[i][j - 1] + dp[i - 1][j]
        }
    }
    
    return dp[m - 1][n - 1]
};
