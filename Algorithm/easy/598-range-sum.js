/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    if (ops.length === 0) return n * m
    
    let minX = Infinity
    let minY = Infinity
    
    for (let i = 0; i < ops.length; i++) {
        const [x, y] = ops[i]
        minX = Math.min(minX, x)
        minY = Math.min(minY, y)
    }
    
    return minX * minY
};
