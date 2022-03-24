/**
 * @param {number[][]} grid
 * @return {number}
 */

// source https://leetcode-cn.com/problems/minimum-path-sum/

// dynamic program
// 定义dp: dp[i][j] 表示到达(i, j)这个格子最小路径和
// 状态转移: f(i, j) = f(i, j) + min{ f(i - 1, j), f(i, j - 1) }
// 初始化: 直接使用grid
// 边界:
//   dp[i][0] += dp[i - 1][0]
//   dp[0][j] += dp[0][j - 1]
var minPathSum = function(grid) {
    const m = grid.length
    const n = grid[0].length
    
    for(let i = 1; i < m; i++) {
        grid[i][0] += grid[i - 1][0]
    }
    
    for(let j = 1; j < n; j++) {
        grid[0][j] += grid[0][j - 1]
    }
    
    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1])
        }
    }
    
    return grid[m - 1][n - 1]
};
