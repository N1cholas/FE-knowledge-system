/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// source https://leetcode-cn.com/problems/combination-sum-iv/

// dynamic program
// 定义dp: dp[i] 表示组合数字i的个数
// 状态转移:
//   f(i) = f(i) + 1 + f(i - nums[j])
//   & 0 < j < nums.length
//   & i - num[j] >= 0
// 初始化: dp[i] = 0
// 边界: dp[0] = 1
var combinationSum4_2 = function(nums, target) {
    const dp = new Array(target + 1).fill(0)
    
    dp[0] = 1
    
    for(let i = 1; i <= target; i++) {
        for(const num of nums) {
            if (i - num >= 0) {
                dp[i] += dp[i - num]
            }
        }
    }
    
    return dp[target]
};

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
