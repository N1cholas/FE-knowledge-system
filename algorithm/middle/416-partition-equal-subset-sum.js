/**
 * @param {number[]} nums
 * @return {boolean}
 */

// memory search
var canPartition = function(nums) {
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

// dp[i][j]表示在[0, i]之间的nums能找出几个数的和为j
var canPartition2 = function(nums) {
    const n = nums.length;
    const sum = nums.reduce((p, c) => p + c)
    
    if (sum % 2) return false
    
    const target = sum / 2
    
    const dp = new Array(n).fill(0).map(_ => new Array(target + 1).fill(false));
    
    for (let i = 0; i < n; i++) {
        dp[i][0] = true;
    }
    
    dp[0][nums[0]] = true;
    
    for (let i = 1; i < n; i++) {
        const num = nums[i];
        for (let j = 1; j <= target; j++) {
            if (j >= num) {
                dp[i][j] = dp[i - 1][j] || dp[i - 1][j - num];
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
    return dp[n - 1][target];
};
