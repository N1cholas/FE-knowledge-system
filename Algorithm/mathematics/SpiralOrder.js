/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (!matrix.length || !matrix[0].length) return []
    
    let top = 0
    let bottom = matrix.length - 1
    let left = 0
    let right = matrix[0].length - 1
    
    const res = []
    
    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            res.push(matrix[top][i])
        }
        
        for (let j = top + 1; j <= bottom; j++) {
            res.push(matrix[j][right])
        }
        
        if (top < bottom && left < right) {
            for (let k = right - 1; k >= left + 1; k--) {
                res.push(matrix[bottom][k])
            }
    
            for (let l = bottom; l >= top + 1; l--) {
                res.push(matrix[l][left])
            }
        }
        
        [top, bottom, left, right] = [top + 1, bottom - 1, left + 1, right - 1]
    }
    
    return res
};
