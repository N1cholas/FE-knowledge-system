/**
 * @param {string[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

// source: https://leetcode-cn.com/problems/surrounded-regions/

var solve = function(board) {
    const n = board.length
    const m = board[0].length
    const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]]
    const visited = new Array(n).fill(0).map(_ => new Array(m).fill(false))
    
    const isBorder = (x, y) => x === 0 || x === n - 1 || y === 0 || y === m - 1
    
    const inArea = (x, y) => x >= 0 && x < n && y >= 0 && y < m
    
    function dfs(board, x, y) {
        visited[x][y] = true
        for (const dir of dirs) {
            const newX = x + dir[0]
            const newY = y + dir[1]
            
            if (inArea(newX, newY) && board[newX][newY] === 'O' && !visited[newX][newY]) {
                dfs(board, newX, newY)
            }
        }
    }
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (isBorder(i, j) && board[i][j] === 'O' && !visited[i][j]) {
                dfs(board, i, j)
            }
        }
    }
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (!isBorder(i, j) && board[i][j] === 'O' && !visited[i][j]) {
                board[i][j] = 'X'
            }
        }
    }
};
