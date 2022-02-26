/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    function tryCombine(candidates, target, index, current, res) {
        if (target === 0) {
            return res.push(current.slice())
        }
        
        for (let i = index; i < candidates.length; i++) {
            if (target >= candidates[i]) {
                current.push(candidates[i])
                tryCombine(candidates, target - candidates[i], i, current, res)
                current.pop()
            }
        }
    }
    
    const res = []
    
    tryCombine(candidates, target, 0, [], res)
    
    return res
};
