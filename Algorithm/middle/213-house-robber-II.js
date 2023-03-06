/**
 * @param {number[]} nums
 * @return {number}
 */

// source https://leetcode-cn.com/problems/house-robber-ii/

// 定义dp: dp[i] 表示偷取前i间房子的最大金额
// 状态转移: f(i) = max{ nums[i - 1] + f(i - 2), f(i - 1) }
// 初始化: dp[i] = 0
// 边界: dp[1] = nums[0]
var rob = function(nums) {
    function tryRob(nums) {
        const n = nums.length
        
        const dp = new Array(n + 1).fill(0)
        
        dp[1] = nums[0]
        
        for(let i = 2; i <= n; i++) {
            dp[i] = Math.max(nums[i - 1] + dp[i - 2], dp[i - 1])
        }
        
        return dp[n]
    }
    
    if (nums.length === 1) return nums[0]
    
    return Math.max(
        tryRob(nums.slice(1)),
        tryRob(nums.slice(0, nums.length - 1))
    )
};
