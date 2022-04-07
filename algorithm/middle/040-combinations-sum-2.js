/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// source: https://leetcode-cn.com/problems/combination-sum-ii/

var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b)
    
    const res = []
    
    tryCombine(candidates, 0, [], res, target)
    
    return res
};

const tryCombine = (candidates, index, current, res, target) => {
    if (target === 0) {
        return res.push(current.slice())
    }
    
    for(let i = index, len = candidates.length; i < len; i++) {
        if (i > index & candidates[i] === candidates[i - 1]) {
            continue
        }
        
        const candidate = candidates[i]
        if (target >= candidate) {
            current.push(candidate)
            tryCombine(candidates, i + 1, current, res, target - candidate)
            current.pop()
        }
    }
}
