/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    function generateCombinations(k, n, index, current, res) {
        if (n === 0 && current.length === k) {
            return res.push(current.slice())
        }
        
        for (let i = index; i <= n && i <= 9; i++) {
            current.push(i)
            generateCombinations(k, n - i, i + 1, current, res)
            current.pop()
        }
    }
    
    const res = []
    
    if (k <= 0) return res
    
    generateCombinations(k, n, 1, [], res)
    
    return res
};

// https://leetcode-cn.com/problems/combination-sum-iii/
