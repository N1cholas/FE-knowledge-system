/**
 * @param {number[][]} grid
 * @return {number}
 */

// dynamic program
// f(m,n) = f(m,n) + min{f(m-1, n), f(m,n-1)}
// f(m,n)代表当前[m,n]的最小路径和
var minPathSum = function(grid) {
    const m = grid.length
    const n = grid[0].length
    
    for(let i = 1; i < m; i++) {
        grid[i][0] += grid[i - 1][0]
    }
    
    for(let i = 1; i < n; i++) {
        grid[0][i] += grid[0][i - 1]
    }
    
    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1])
        }
    }
    
    return grid[m - 1][n - 1]
};
