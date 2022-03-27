/**
 * @param {number[]} nums
 * @return {number}
 */

// source https://leetcode-cn.com/problems/house-robber/

// dynamic program
// 定义dp: dp[i] 表示偷前i间房子的最高金额
// 状态转移: f(i) = max{ nums[i - 1] + f(i - 2), f(i - 1) }
// 初始化: dp[i] = 0
// 边界: dp[1] = nums[0]
var rob = function(nums) {
    const n = nums.length
    
    const dp = new Array(n + 1).fill(0)
    
    dp[1] = nums[0]
    
    for(let i = 2; i <= n; i++) {
        dp[i] = Math.max(nums[i - 1] + dp[i - 2], dp[i - 1])
    }
    
    return dp[n]
};

// memory search
var rob2 = function(nums) {
    function tryRob(nums, index) {
        if (index >= nums.length) {
            return 0
        }
        
        if (memo[index] !== -1) return memo[index]
        
        let res = 0
        for (let i = index; i < nums.length; i++) {
            res = Math.max(res, nums[i] + tryRob(nums, i + 2))
        }
        
        memo[index] = res
        
        return res
    }
    
    const memo = new Array(nums.length).fill(-1)
    
    return tryRob(nums, 0)
};
