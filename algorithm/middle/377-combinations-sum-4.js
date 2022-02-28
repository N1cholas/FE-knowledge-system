/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// memory search
var combinationSum4 = function(nums, target) {
    function tryCombinationSum(nums, target) {
        if (target === 0) {
            return 1
        }
        
        if (memo[target] !== -1) return memo[target]
        
        let res = 0
        for (const num of nums) {
            if (num <= target) {
                res += tryCombinationSum(nums, target - num)
            }
        }
        
        memo[target] = res
        
        return res
    }
    
    const memo = new Array(target + 1).fill(-1)
    
    return tryCombinationSum(nums, target)
};

// dynamic program
// f(x)=f(x)+f(x - nums[i]) & nums[i] <= x
var combinationSum4_2 = function(nums, target) {
    const dp = new Array(target + 1).fill(0)
    
    dp[0] = 1
    
    for (let i = 1; i <= target; i++) {
        for (const num of nums) {
            if (num <= i) {
                dp[i] += dp[i - num]
            }
        }
    }
    
    return dp[target]
};
