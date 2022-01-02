/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// memory search
var findMaxForm = function(strs, m, n) {
    const formatStrs = strs.map(str => {
        let ones = 0
        let zeros = 0
        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i) === '1') {
                zeros++
            } else {
                ones++
            }
        }
        return [ones, zeros]
    })
    
    function tryFind(strs, index, m, n) {
        if (index < 0) {
            return 0
        }
        
        if (memo.has(`${index}-${m}-${n}`)) return memo.get(`${index}-${m}-${n}`)
        
        let res = tryFind(strs, index - 1, m, n)
        if (m >= strs[index][0] && n >= strs[index][1]) {
            res = Math.max(res, 1 + tryFind(strs, index - 1, m - strs[index][0], n - strs[index][1]))
        }
        
        memo.set(`${index}-${m}-${n}`, res)
        
        return res
    }
    
    const memo = new Map()
    
    return tryFind(formatStrs, formatStrs.length - 1, m, n)
};
