/**
 * @param {number[]} nums
 * @return {boolean}
 */

// memory search
var canPartition = function(nums) {
    function partition(nums, index, sum) {
        if (index < 0 || sum < 0) {
            return false
        }
        
        if (memo[index][sum] !== -1) return memo[index][sum]
        
        if (sum === 0) return true
        
        memo[index][sum] = partition(nums, index - 1, sum) || partition(nums, index - 1, sum - nums[index])
        
        return memo[index][sum]
    }
    
    const sum = nums.reduce((p, c) => p + c)
    
    if (sum % 2 === 1) return false
    
    const memo = []
    
    for (let i = 0; i < nums.length; i++) {
        memo.push(new Array((sum / 2) + 1).fill(-1))
    }
    
    return partition(nums, nums.length - 1, sum / 2)
};
