/**
 * @param {number[]} nums
 * @return {number}
 */

// memory search
var maxSubArray = function(nums) {
    function trySum(nums, index) {
        if (index < 0) {
            return 0
        }
        
        if (memo[index] !== -Infinity) return memo[index]
        
        let res = Math.max(
            trySum(nums, index - 1) + nums[index],
            nums[index]
        )
        
        memo[index] = res
        
        ans = Math.max(ans, res)
        
        return res
    }
    
    let ans = -Infinity
    
    const memo = new Array(nums.length).fill(-Infinity)
    
    trySum(nums, nums.length - 1)
    
    return ans
};

// dynamic program
// f(i) = max{ f(i - 1) + nums[i], nums[i] }
// f(i)表示[0, i]范围内最大子数组和
var maxSubArray2 = function(nums) {
    const n = nums.length
    const dp = new Array(n).fill(-Infinity)
    
    dp[0] = nums[0]
    
    for (let i = 1; i < n; i++) {
        dp[i] = Math.max(nums[i], nums[i] + dp[i - 1])
    }
    
    return Math.max(...dp)
};
