/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// memory search
var combinationSum4 = function(nums, target) {
    function tryCombinations(nums, target) {
        if (target === 0) {
            return 1
        }
        
        if (memo[target] !== -1) return memo[target]
        
        let res = 0
        for (let i = 0; i < nums.length; i++) {
            if (target >= nums[i]) {
                res += tryCombinations(nums, target - nums[i])
            }
        }
        
        memo[target] = res
        
        return res
    }
    
    const memo = new Array(target + 1).fill(-1)
    
    tryCombinations(nums, target)
    
    return memo[target]
};
