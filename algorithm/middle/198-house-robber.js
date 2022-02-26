/**
 * @param {number[]} nums
 * @return {number}
 */

// memory search
var rob = function(nums) {
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

// dynamic program
// f(i)=max{nums[i] + f(i - 2), f(i - 1)}
var rob2 = function(nums) {
    const n = nums.length
    const dp = new Array(nums.length).fill(0)
    
    dp[0] = nums[0]
    dp[1] = Math.max(dp[0], nums[1])
    
    for(let i = 2; i < n; i++) {
        dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1])
    }
    
    return dp[n - 1]
};
