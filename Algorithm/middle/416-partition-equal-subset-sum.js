/**
 * @param {number[]} nums
 * @return {boolean}
 */

// source: https://leetcode-cn.com/problems/partition-equal-subset-sum/

// 定义dp: dp[i][j] 代表前i个数的和能否组成j值
// 状态转移:
//   j >= nums[i - 1] & f(i， j) = f(i - 1, j) || f(i - 1, j - nums[i - 1])
//   j < nums[i - 1] & f(i, j) = f(i - 1, j)
// 初始化: dp[i][j] = false
// 边界: dp[0][0] = true
var canPartition = function(nums) {
    const n = nums.length
    
    const sum = nums.reduce((p, c) => p + c)
    
    if (sum % 2) return false
    
    const target = sum / 2
    
    const dp = new Array(n + 1).fill(0).map(_ => new Array(target + 1).fill(false))
    
    dp[0][0] = true
    
    for (let i = 1; i <= n; i++) {
        for(let j = 1; j <= target; j++) {
            if (j >= nums[i - 1]) {
                dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]]
            } else {
                dp[i][j] = dp[i - 1][j]
            }
        }
    }
    
    return dp[n][target]
};

// memory search
var canPartition2 = function(nums) {
    function partition(nums, index, sum) {
        if (index < 0 || sum < 0) {
            return false
        }
        
        if (memo[index][sum] !== -1) return memo[index][sum]
        
        if (sum === 0) return true
        
        memo[index][sum] = partition(nums, index - 1, sum) || partition(nums, index - 1, sum - nums[index])
        
        return memo[index][sum]
    }
    
    const sum = nums.reduce((p, c) => p + c)
    
    if (sum % 2 === 1) return false
    
    const memo = []
    
    for (let i = 0; i < nums.length; i++) {
        memo.push(new Array((sum / 2) + 1).fill(-1))
    }
    
    return partition(nums, nums.length - 1, sum / 2)
};
