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
// https://leetcode-cn.com/problems/target-sum/solution/mu-biao-he-by-leetcode-solution-o0cp/
// 定义dp: dp[i][j] 表示取前i个数组成j的总和
// 状态转移:
// (sum - neg) - neg = target => neg = (sum - target) / 2
// f(i, j) = f(i - 1, j) & j < nums[i - 1]
// f(i, j) = f(i, j) + f(i - 1,  j - nums[i - 1]) & j >= nums[i - 1]
// 边界: dp[0][0] = 1
var findTargetSumWays2 = function(nums, target) {
    const sum = nums.reduce((p, c) => p + c)
    
    const diff = sum - target
    
    if (diff < 0 || diff % 2 !== 0) {
        return 0
    }
    
    const neg = diff / 2
    
    const n = nums.length
    
    const dp = new Array(n + 1).fill(0).map(_ => new Array(neg + 1).fill(0))
    
    dp[0][0] = 1
    
    for(let i = 1; i <= n; i++) {
        const num = nums[i - 1]
        for(let j = 0; j <= neg; j++) {
            dp[i][j] = dp[i - 1][j]
            if (j >= num) {
                dp[i][j] += dp[i - 1][j - num]
            }
        }
    }
    
    return dp[n][neg]
};
