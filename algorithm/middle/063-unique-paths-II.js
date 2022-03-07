/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

// dynamic program
// 与unique paths I不同的是有障碍物
// 初始化边界需要考虑障碍物，计算路径和跳过障碍物格子计算
// 障碍物格子的路径和为0
// dp[i][j]表示在 i * j的矩阵内，第i - 1行第j - 1个格子的路径和
var uniquePathsWithObstacles = function(obstacleGrid) {
    if (obstacleGrid[0][0]) return 0
    
    const m = obstacleGrid.length
    const n = obstacleGrid[0].length
    
    const dp = new Array(m).fill(0).map(_ => new Array(n).fill(0))
    
    dp[0][0] = 1
    
    for(let i = 1; i < m; i++) {
        if (!obstacleGrid[i][0]) {
            dp[i][0] = dp[i - 1][0]
        }
    }
    
    for(let i = 1; i < n; i++) {
        if (!obstacleGrid[0][i]) {
            dp[0][i] = dp[0][i - 1]
        }
    }
    
    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            if (!obstacleGrid[i][j]) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
            }
        }
    }
    
    return dp[m - 1][n - 1]
};
