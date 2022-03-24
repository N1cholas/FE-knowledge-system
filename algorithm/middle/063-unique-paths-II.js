/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

// source https://leetcode-cn.com/problems/unique-paths-ii/

// dynamic program
// 定义dp: dp[i][j] 表示到达(i, j)这个格子的路径总和
// 状态转移: f(i, j) = f(i - 1, j) + f(i, j - 1)
// 初始化: dp[i][j] = 0
// 边界: dp[0][0] = 1 & dp[i][0] = dp[i - 1][0] & dp[0][j] = dp[0][j - 1]
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length
    const n = obstacleGrid[0].length
    
    const dp = new Array(m).fill(0).map(_ => new Array(n).fill(0))
    
    if (obstacleGrid[0][0]) return 0
    
    dp[0][0] = 1
    
    for(let i = 1; i < m; i++) {
        if (!obstacleGrid[i][0]) {
            dp[i][0] = dp[i - 1][0]
        }
    }
    
    for(let j = 1; j < n; j++) {
        if (!obstacleGrid[0][j]) {
            dp[0][j] = dp[0][j - 1]
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
