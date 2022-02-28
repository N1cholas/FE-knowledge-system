/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// memory search
var findTargetSumWays = function(nums, target) {
    function trySum(nums, index, target) {
        if (nums.length === index) {
            return target === 0 ? 1 : 0
        }
        
        if (memo.has(`${index}-${target}`)) return memo.get(`${index}-${target}`)
        
        let res = 0
        res += trySum(nums, index + 1, target + nums[index])
        res += trySum(nums, index + 1, target - nums[index])
        
        memo.set(`${index}-${target}`, res)
        
        return res
    }
    
    const memo = new Map()
    
    return trySum(nums, 0, target)
};

// dynamic program
var findTargetSumWays2 = function (nums, target) {
    const n = nums.length
    
    const dp = new Array(n).fill(0).map(_ => new Array(2001).fill(0))
    
    dp[0][1000 - nums[0]] += 1;
    dp[0][1000 + nums[0]] += 1;
    
    for(let i = 1; i < n; i ++) {
        for(let j = 0; j < 2001; j ++){
            if(j - nums[i] >= 0 && j - nums[i] < 2001)
                dp[i][j] += dp[i - 1][j - nums[i]];
            if(j + nums[i] >= 0 && j + nums[i] < 2001)
                dp[i][j] += dp[i - 1][j + nums[i]];
        }
    }
    
    
    return dp[n - 1][target + 1000]
}
