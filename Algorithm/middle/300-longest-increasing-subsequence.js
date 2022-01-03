/**
 * @param {number[]} nums
 * @return {number}
 */

// memory search
var lengthOfLIS = function(nums) {
    function getMax(nums, endIndex) {
        if (endIndex >= nums.length) return 0
        
        if (memo[endIndex] !== -1) return memo[endIndex]
        
        let res = 1
        for (let i = 0; i < endIndex; i++) {
            if (nums[i] < nums[endIndex]) {
                res = Math.max(res, 1 + getMax(nums, i))
            }
        }
        
        memo[endIndex] = res
        
        return res
    }
    
    const memo = new Array(nums.length).fill(-1)
    
    let ans = 1
    for (let i = 0; i < nums.length; i++) {
        ans = Math.max(ans, getMax(nums, i))
    }
    
    return ans
};

// dynamic program
var lengthOfLIS2 = function(nums) {
    const dp = new Array(nums.length).fill(1)
    
    for (let i = 1; i < nums.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], 1 + dp[j])
            }
        }
    }
    
    return Math.max(...dp)
};
