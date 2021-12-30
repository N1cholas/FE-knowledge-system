/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    function generateSum(candidates, target, index, current, res) {
        if (target === 0) {
            return res.push(current.slice())
        }
        
        for (let i = index; i < candidates.length; i++) {
            const cur = candidates[i]
            if (target >= cur) {
                current.push(cur)
                generateSum(candidates, target - cur, i, current, res)
                current.pop()
            }
        }
    }
    
    const res = []
    
    if (!candidates.length) return res
    
    generateSum(candidates, target, 0, [], res)
    
    return res
};

// https://leetcode-cn.com/problems/combination-sum/
