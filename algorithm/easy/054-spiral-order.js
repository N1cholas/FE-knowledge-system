/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (!matrix.length || !matrix[0].length) return []
    let left = 0
    let right = matrix[0].length - 1
    let top = 0
    let bottom = matrix.length - 1
    const res = []
    
    while(left <= right && top <= bottom) {
        for(let i = left; i <= right; i++) {
            res.push(matrix[top][i])
        }
        
        for(let i = top + 1; i <= bottom; i++) {
            res.push(matrix[i][right])
        }
        
        if (left < right && top < bottom) {
            for(let i = right - 1; i >= left + 1; i--) {
                res.push(matrix[bottom][i])
            }
            
            for(let i = bottom; i >= top + 1; i--) {
                res.push(matrix[i][left])
            }
        }
        
        [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1]
    }
    
    return res
};
