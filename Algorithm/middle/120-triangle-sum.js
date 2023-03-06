/**
 * @param {number[][]} triangle
 * @return {number}
 */

// source https://leetcode-cn.com/problems/triangle/

// dynamic program
// 定义dp: dp[i][j] 表示第i - 1行的第j - 1个大最小路径和
// 状态转移: dp[i][j] = dp[i][j] + min{ dp[i - 1][j], dp[i - 1][j - 1] }
// 初始化: dp[i][j] = 0
// 边界:
//   dp[i][0] = dp[i][0] + dp[i - 1][0]
//   dp[i][i] = dp[i][i] + dp[i - 1][i - 1]
var minimumTotal = function(triangle) {
    const n = triangle.length
    
    for(let i = 1; i < n; i++) {
        triangle[i][0] += triangle[i - 1][0]
        triangle[i][i] += triangle[i - 1][i - 1]
    }
    
    for(let i = 2; i < n; i++) {
        for(let j = 1; j < i; j++) {
            triangle[i][j] += Math.min(triangle[i - 1][j], triangle[i - 1][j - 1])
        }
    }
    
    return Math.min(...triangle[n - 1])
};

// memory search
var minimumTotal2 = function(triangle) {
    const dp = []
    
    for (let i = 0; i < triangle.length; i++) {
        const cur = []
        for(let j = 0; j < triangle.length; j++) {
            cur.push(-1)
        }
        dp.push(cur)
    }
    
    function sum(triangle, i, j, dp) {
        if (dp[i][j] !== -1) {
            return dp[i][j]
        }
        
        if (i === 0) {
            return dp[i][j] = triangle[i][j]
        }
        
        if (j === 0) {
            return dp[i][j] = triangle[i][j] + sum(triangle, i - 1, j, dp)
        }
        
        if (j === i) {
            return dp[i][j] = triangle[i][j] + sum(triangle, i - 1, j - 1, dp)
        }
        
        return dp[i][j] = triangle[i][j] + Math.min(sum(triangle, i - 1, j, dp), sum(triangle, i - 1, j - 1, dp))
    }
    
    for (let i = 0; i < triangle.length; i++) {
        sum(triangle, triangle.length - 1, i, dp)
    }

    return Math.min(...dp[dp.length - 1])
};
