/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// memory search
var findTargetSumWays = function(nums, target) {
    function trySum(nums, index, target) {
        if (nums.length === index) {
            return target === 0 ? 1 : 0
        }
        
        if (memo.has(`${index}-${target}`)) return memo.get(`${index}-${target}`)
        
        let res = 0
        res += trySum(nums, index + 1, target + nums[index])
        res += trySum(nums, index + 1, target - nums[index])
        
        memo.set(`${index}-${target}`, res)
        
        return res
    }
    
    const memo = new Map()
    
    return trySum(nums, 0, target)
};
