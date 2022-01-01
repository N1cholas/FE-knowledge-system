/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 1) return nums[0]
    
    function tryRobber(nums) {
        const n = nums.length
        const dp = new Array(n).fill(-1)
        
        dp[0] = nums[0]
        dp[1] = Math.max(nums[1], dp[0])
        
        for (let i = 2; i < n; i++) {
            dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1])
        }
        
        return dp[n - 1]
    }
    
    return Math.max(tryRobber(nums.slice(0, nums.length - 1)), tryRobber(nums.slice(1)))
};
