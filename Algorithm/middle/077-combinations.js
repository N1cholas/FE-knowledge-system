/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

// source: https://leetcode-cn.com/problems/combinations/

var combine = function(n, k) {
    const res = []
    
    tryCombine(n, 1, [], res, k)
    
    return res
};

const tryCombine = (n, index, current, res, len) => {
    if (current.length === len) {
        return res.push(current.slice())
    }
    
    for(let i = index; i <= n; i++) {
        current.push(i)
        tryCombine(n, i + 1, current, res, len)
        current.pop()
    }
}
