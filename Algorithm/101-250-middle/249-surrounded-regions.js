/**
 * @param {string[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const m = board.length
    const n = board[0].length
    const dir = [[-1, 0], [0, 1], [1, 0], [0, -1]]
    const visited = []
    
    for (let i = 0; i < m; i++) {
        const cur = []
        for (let j = 0; j < n; j++) {
            cur.push(false)
        }
        visited.push(cur)
    }
    
    function isBorder(x, y) {
        return x === 0 || x === m - 1 || y === 0 || y === n - 1
    }
    
    function inArea(x, y) {
        return x >= 0 && x < m && y >= 0 && y < n
    }
    
    function dfs(board, x, y) {
        visited[x][y] = true
        for (let i = 0; i < 4; i++) {
            const newX = x + dir[i][0]
            const newY = y + dir[i][1]
            
            if (inArea(newX, newY) && board[newX][newY] === 'O' && !visited[newX][newY]) {
                dfs(board, newX, newY)
            }
        }
    }
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (isBorder(i, j) && board[i][j] === 'O' && !visited[i][j]) {
                dfs(board, i, j)
            }
        }
    }
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!isBorder(i, j) && board[i][j] === 'O' && !visited[i][j]) {
                board[i][j] = 'X'
            }
        }
    }
    
};

// https://leetcode-cn.com/problems/surrounded-regions/
