/**
 * @param {number[]} nums
 * @return {number}
 */

// source https://leetcode-cn.com/problems/longest-increasing-subsequence/

// dynamic program
// 定义dp: dp[i] 表示[0, i]区间的LIS长度
// 状态转移:
//   f(i) = max{ f(i), 1 + f(j) }
//   & nums[i] > nums[j]
//   & i > j
// 初始化:
//   dp[i] = 1
//   & i = 1
//   & j = 0
// 边界: dp[0] = 1
var lengthOfLIS = function(nums) {
    const n = nums.length
    
    const dp = new Array(n).fill(1)
    
    for(let i = 1; i < n; i++) {
        for(let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], 1 + dp[j])
            }
        }
    }
    
    return Math.max(...dp)
};

// memory search
var lengthOfLIS2 = function(nums) {
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
