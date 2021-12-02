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

    let res = []

    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) {
            res.push(matrix[top][i])
        }

        for (let j = top + 1; j <= bottom; j++) {
            res.push(matrix[j][right])
        }

        if (left < right && top < bottom) {
            for (let k = right - 1; k >= left + 1; k--) {
                res.push(matrix[bottom][k])
            }

            for (let l = bottom; l >= top + 1; l--) {
                res.push(matrix[l][left])
            }
        }

        [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1]
    }

    return res
};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))
