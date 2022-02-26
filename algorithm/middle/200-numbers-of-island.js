/**
 * @param {string[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const m = grid.length
    const n = grid[0].length
    const dir = [[-1, 0], [0, 1], [1, 0], [0, -1]]
    const visited = []
    let count = 0
    
    for (let i = 0; i < m; i++) {
        visited.push(new Array(n + 1).fill(false))
    }
    
    function inArea(x, y) {
        return x >= 0 && x < m && y >= 0 && y < n
    }
    
    function dfs(grid, x, y) {
        visited[x][y] = true
        for (let i = 0; i < 4; i++) {
            const newX = x + dir[i][0]
            const newY = y + dir[i][1]
            if (inArea(newX, newY) && grid[newX][newY] === '1' && !visited[newX][newY]) {
                dfs(grid, newX, newY)
            }
        }
    }
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1' && !visited[i][j]) {
                dfs(grid, i, j)
                count++
            }
        }
    }
    
    return count
};
