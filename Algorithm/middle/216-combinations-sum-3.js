/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */

// source: https://leetcode-cn.com/problems/combination-sum-iii/

var combinationSum3 = function(k, n) {
    const res = []
    
    tryCombine(k, n, 1, [], res)
    
    return res
};

const tryCombine = (k, n, index, current, res) => {
    if (k === 0 && n === 0) {
        return res.push(current.slice())
    }
    
    for(let i = index; i <= 9; i++) {
        if (n >= i) {
            current.push(i)
            tryCombine(k - 1, n - i, i + 1, current, res)
            current.pop()
        }
    }
}
