/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    function generateCombinations(n, k, start, p, res) {
        if (p.length === k) {
            return res.push(p.slice())
        }
        
        // 回溯剪枝
        // for (let i = start; i <= n; i++) {
        for (let i = start; i <= n - (k - p.length) + 1; i++) {
            p.push(i)
            generateCombinations(n, k, i + 1, p, res)
            p.pop()
        }
    }
    
    const res = []
    
    if (n <= 0 || k <= 0 || k > n) return res
    
    generateCombinations(n, k, 1, [], res)
    
    return res
};

// https://leetcode-cn.com/problems/combinations/
