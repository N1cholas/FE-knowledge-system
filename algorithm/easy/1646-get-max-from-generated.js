/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
    if (n === 0) return 0
    const array = new Array(n + 1).fill(0)
    
    array[1] = 1
    
    for (let i = 2; i <= n; i++) {
        array[i] = array[~~(i / 2)] + i % 2 * array[~~(i / 2) + 1]
    }
    
    return Math.max(...array)
};
