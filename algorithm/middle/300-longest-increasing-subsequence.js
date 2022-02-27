/**
 * @param {number[]} nums
 * @return {number}
 */

// memory search
var lengthOfLIS = function(nums) {
    function tryGetLIS(endIndex) {
        if (endIndex >= n) {
            return 0
        }
        
        if (memo[endIndex] !== -1) return memo[endIndex]
        
        let res = 1
        for (let i = 0; i < endIndex; i++) {
            if (nums[i] < nums[endIndex]) {
                res = Math.max(res, 1 + tryGetLIS(i))
            }
        }
        
        memo[endIndex] = res
        
        return res
    }
    
    const n = nums.length
    
    const memo = new Array(n + 1).fill(-1)
    
    let ans = -1
    
    for (let i = 1; i < n; i++) {
        ans = Math.max(ans, tryGetLIS(i))
    }
    
    return ans
};

// dynamic program
// f(i)=max{f(i), 1 + f(j)} j < i && j >= 0 && nums[j] < nums[i]
var lengthOfLIS2 = function(nums) {
    const n = nums.length
    const dp = new Array(n + 1).fill(1)
    
    for(let i = 1; i < n; i++) {
        for(let j = i - 1; j >= 0; j--) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], 1 + dp[j])
            }
        }
    }
    
    return Math.max(...dp)
};
