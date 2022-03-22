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
// dp[i] 表示组合数字i最大数目
// 确定状态方程: f(i) = f(i) + f(i - num[i]) && i >= num[i]
// 确定边界: f(0) = 1
var combinationSum4_2 = function(nums, target) {
    const dp = new Array(target + 1).fill(0)
    
    dp[0] = 1
    
    for(let i = 1; i <= target; i++) {
        for(const num of nums) {
            if (i >= num) {
                dp[i] += dp[i - num]
            }
        }
    }
    
    return dp[target]
};
