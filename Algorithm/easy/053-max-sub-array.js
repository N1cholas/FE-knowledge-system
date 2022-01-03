/**
 * @param {number[]} nums
 * @return {number}
 */

// f(i)=max{f(i−1)+nums[i],nums[i]}

// memory search
var maxSubArray = function(nums) {
    // [0, index]
    function trySum(nums, index) {
        if (index < 0) {
            return 0
        }
        
        if (memo[index] !== Infinity) return memo[index]
        
        let res = Math.max(trySum(nums, index - 1) + nums[index], nums[index])
        
        ans = Math.max(res, ans)
        
        memo[index] = res
        
        return res
    }
    
    let ans = -Infinity
    
    const memo = new Array(nums.length).fill(Infinity)
    
    trySum(nums, nums.length - 1)
    
    return ans
};

// dynamic program
var maxSubArray2 = function(nums) {
    const dp = new Array(nums.length).fill(-1)
    
    dp[0] = nums[0]
    
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(nums[i], nums[i] + dp[i - 1])
    }
    
    return Math.max(...dp)
};
