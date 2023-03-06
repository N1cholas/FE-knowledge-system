/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// source https://leetcode-cn.com/problems/unique-paths/

// dynamic program
// 定义dp: dp[i][j] 表示到达(i, j)格子的路径总数
// 状态转移: f(i, j) = f(i - 1, j) + f(i, j - 1)
// 初始化: dp[i][j] = 0
// 边界: dp[i][0] = 1 & dp[0][j] = 1
var uniquePaths = function(m, n) {
    const dp = new Array(m).fill(0).map(_ => new Array(n).fill(0))
    
    for(let i = 0; i < m; i++) {
        dp[i][0] = 1
    }
    
    for(let j = 0; j < n; j++) {
        dp[0][j] = 1
    }
    
    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    
    return dp[m - 1][n - 1]
};

// memory search
var uniquePaths2 = function(m, n) {
    const memo = []
    
    for(let i = 0; i < m; i++) {
        const row = []
        for(let j = 0; j < n; j++) {
            row.push(-1)
        }
        memo.push(row)
    }
    
    function dfs(m, n, memo) {
        if (m === 0 || n === 0) return 1
        
        if (memo[m][n] !== -1) return memo[m][n]
        
        let res = dfs(m - 1, n, memo) + dfs(m, n - 1, memo)
        
        memo[m][n] = res
        
        return res
    }
    
    return dfs(m - 1, n - 1, memo)
};
