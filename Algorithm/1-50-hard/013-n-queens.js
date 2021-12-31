/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    function generateBoard(n, result) {
        return result.map(i => {
            const s = new Array(n).fill('.')
            s[i] = 'Q'
            return s.join('')
        })
    }
    function putQueens(n, rowIndex, result) {
        if (rowIndex === n) {
            ans.push(generateBoard(n, result))
        }
        
        for (let j = 0; j < n; j++) {
            if (!colVisited[j] && !dia1[rowIndex + j] && !dia2[rowIndex - j + n - 1]) {
                result.push(j)
                colVisited[j] = true
                dia1[rowIndex + j] = true
                dia2[rowIndex - j + n - 1] = true
                putQueens(n, rowIndex + 1, result)
                result.pop()
                colVisited[j] = false
                dia1[rowIndex + j] = false
                dia2[rowIndex - j + n - 1] = false
            }
        }
    }
    
    const ans = []
    const colVisited = new Array(n).fill(false)
    const dia1 = new Array(2 * n - 1).fill(false)
    const dia2 = new Array(2 * n - 1).fill(false)
    
    putQueens(n, 0, [])
    
    return ans
};

// https://leetcode-cn.com/problems/n-queens/
