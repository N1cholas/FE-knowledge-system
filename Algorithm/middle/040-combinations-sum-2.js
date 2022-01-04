/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    function tryCombine(candidates, target, index, current, res) {
        if (target === 0) {
            return res.push(current.slice())
        }
        
        for (let i = index; i < candidates.length; i++) {
            if (i > index && candidates[i] === candidates[i - 1]) {
                continue
            }
            
            if (target >= candidates[i]) {
                current.push(candidates[i])
                tryCombine(candidates, target - candidates[i], i + 1, current, res)
                current.pop()
            }
        }
    }
    
    candidates.sort((a, b) => a - b)
    
    const res = []
    
    tryCombine(candidates, target, 0, [], res)
    
    return res
};
