/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    function tryCombine(k, n, index, current, res) {
        if (n === 0 && k === 0) {
            return res.push(current.slice())
        }
        
        for (let i = index; i <= 9; i++) {
            if (n >= i) {
                current.push(i)
                tryCombine(k - 1, n - i, i + 1, current, res)
                current.pop()
            }
        }
    }
    
    const res = []
    
    tryCombine(k, n, 1, [], res)
    
    return res
};
