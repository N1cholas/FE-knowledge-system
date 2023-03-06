/**
 * @param {character[][]} grid
 * @return {number}
 */

// source: https://leetcode-cn.com/problems/number-of-islands/

var numIslands = function(grid) {
    const n = grid.length
    const m = grid[0].length
    
    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    
    const visited = new Array(n).fill(0).map(_ => new Array(m).fill(false))
    
    const inArea = (x, y) => x >= 0 && x < n && y >= 0 && y < m
    
    let isLand = 0
    
    const dfs = (x, y) => {
        visited[x][y] = true
        
        for (const dir of dirs) {
            const newX = x + dir[0]
            const newY = y + dir[1]
            
            if (inArea(newX, newY) && grid[newX][newY] === '1' && !visited[newX][newY]) {
                dfs(newX, newY)
            }
        }
    }
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if (grid[i][j] === '1' && !visited[i][j]) {
                isLand++
                dfs(i, j)
            }
        }
    }
    
    return isLand
};
