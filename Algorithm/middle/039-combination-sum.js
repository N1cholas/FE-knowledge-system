/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// source: https://leetcode-cn.com/problems/combination-sum/

// 定义入参:
//   candidates  组合对象
//   index       [index, candidates.length)
//   current     当前缓存值
//   res         结果
//   target      目标值
// 确定边界: target === 0
var combinationSum = function(candidates, target) {
    const res = []
    
    tryCombine(candidates, 0, [], res, target)
    
    return res
};

const tryCombine = (candidates, index, current, res, target) => {
    if (target === 0) {
        return res.push(current.slice())
    }
    
    for(let i = index, len = candidates.length; i < len; i++) {
        const candidate = candidates[i]
        
        if (target >= candidate) {
            current.push(candidate)
            tryCombine(candidates, i, current, res, target - candidate)
            current.pop(candidate)
        }
    }
}
