/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    function tryCombine(n, k, index, current, res) {
        if (k === 0) {
            return res.push(current.slice())
        }
        
        for (let i = index; i <= n; i++) {
            if (!used[i]) {
                current.push(i)
                used[i] = true
                tryCombine(n, k - 1, i + 1, current, res)
                current.pop()
                used[i] = false
            }
        }
    }
    
    const res = []
    
    const used = new Array(n + 1).fill(false)
    
    tryCombine(n, k, 1, [], res)
    
    return res
};
