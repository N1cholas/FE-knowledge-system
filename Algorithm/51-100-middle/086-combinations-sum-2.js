/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b)
    function generateSum(candidates, target, index, current, result) {
        if (target === 0) {
            return result.push(current.slice())
        }
        
        for (let i = index; i < candidates.length; i++) {
            const cur = candidates[i]
            
            // 去重
            if (i > index && cur === candidates[i - 1]) {
                continue
            }
            
            if (target >= cur) {
                current.push(cur)
                generateSum(candidates, target - cur, i + 1, current, result)
                current.pop()
            }
        }
    }
    
    const res = []
    
    if (!candidates.length) return res
    
    generateSum(candidates, target, 0, [], res)
    
    return res
};

console.log(combinationSum2([2,5,2,1,2], 5))

// https://leetcode-cn.com/problems/combination-sum-ii/
