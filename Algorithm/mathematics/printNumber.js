/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
    const max = Math.pow(10, n)
    const res = []
    
    for (let i = 1; i < max; i++) {
        res.push(i)
    }
    
    return res
};
