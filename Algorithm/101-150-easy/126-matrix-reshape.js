/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    if (r * c !== mat.length * mat[0].length) return mat
    
    const ans = []
    let cur = []
    
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            cur.push(mat[i][j])
            
            if (cur.length === c) {
                ans.push(cur)
                cur = []
            }
        }
    }
    
    return ans
};
