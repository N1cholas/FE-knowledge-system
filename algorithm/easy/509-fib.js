/**
 * @param {number} n
 * @return {number}
 */

// source: https://leetcode-cn.com/problems/fibonacci-number/

// 定义dp: dp[i] 表示组成数字i的总和
// 状态转移:
//   f(i) = f(i - 1) + f(i - 2)
// 初始化: dp[i] = 0
// 边界:
//   dp[0] = 0
//   dp[1] = 1
var fib = function(n) {
    const dp = new Array(n + 1).fill(0)
    
    dp[0] = 0
    dp[1] = 1
    
    for(let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    
    return dp[n]
};
