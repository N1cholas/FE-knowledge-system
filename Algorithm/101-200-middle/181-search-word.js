/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    const m = board.length
    const n = board[0].length
    const visited = []
    
    for (let i = 0; i < m; i++) {
        const cur = []
        for (let j = 0; j < n; j++) {
            cur.push(false)
        }
        visited.push(cur)
    }
    
    function inArea(x, y) {
        return x >= 0 && x < m && y >= 0 && y < n
    }
    
    function search(board, word, index, x, y) {
        if (index === word.length - 1) {
            return word.charAt(index) === board[x][y]
        }
        
        if (board[x][y] === word.charAt(index)) {
            visited[x][y] = true
            for (let i = 0; i < 4; i++) {
                const newX = x + dir[i][0]
                const newY = y + dir[i][1]
                
                if (
                    inArea(newX, newY)
                    && !visited[newX][newY]
                    && search(board, word, index + 1, newX, newY)
                ) {
                    return true
                }
            }
            visited[x][y] = false
        }
        
        return false
    }
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (search(board, word, 0, i, j)) {
                return true
            }
        }
    }
    
    return false
};

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
, "ABCCED"))

// https://leetcode-cn.com/problems/word-search/
