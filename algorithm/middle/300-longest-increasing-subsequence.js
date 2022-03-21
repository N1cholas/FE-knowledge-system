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
// 重复的子问题: 寻找长度为i的LIS可以转换为寻找长度为i - 1的LIS的长度 + 1
// 定义dp: dp[i] 表示 [0, i] 区间内的最长LIS
// 确定状态方程: f(i) = Math.max(f(i), 1 + f(j)) && 0 <= j < i && nums[i] > nums[j]
// 确定边界: f(0) = 1 只有一个元素的区间的LIS是1
var lengthOfLIS2 = function(nums) {
        const n = nums.length
        
        const dp = new Array(n).fill(1)
        
        for(let i = 1; i < n; i++) {
            for(let j = 0; j < i; j++) {
                if (nums[i] > nums[j]) dp[i] = Math.max(dp[i], 1 + dp[j])
            }
        }
        
        return Math.max(...dp)
    };
