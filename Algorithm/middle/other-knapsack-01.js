// 01背包问题
/**
 * @param {number[]} w 每件物品的重量
 * @param {number[]} v 每件物品的价值
 * @param {number}   c 背包容量
 * @return {number}
 */

// source: https://www.lintcode.com/problem/125/description

// dynamic program
// 定义dp: dp[i][j] 表示容量装入前i个物品，总大小为j的最大价值
// 状态转移:
//   f(i, j) = f(i - 1, j)
//   j >= A[i - 1] & f(i, j) = max{ f(i, j), v[i - 1] + f(i - 1, j - A[i - 1]) }
// 初始化: dp[i][j] = 0
// 边界: dp[0][0] = 0
function backPackII(c, w, v) {
    const n = w.length
    
    const dp = new Array(n + 1).fill(0).map(_ => new Array(c + 1).fill(0))
    
    for(let i = 1; i <= n; i++) {
        for(let j = 0; j <= c; j++) {
            dp[i][j] = dp[i - 1][j]
            if (j >= w[i - 1]) {
                dp[i][j] = Math.max(dp[i][j], v[i - 1] + dp[i - 1][j - w[i - 1]])
            }
        }
    }
    
    return dp[n][c]
}

// memory search
function knapsack(w, v, c) {
    // 放入[0, index]个物品的最大价值
    function bestValue(w, v, index, c) {
        if (index < 0 || c <= 0) {
            return 0
        }
        
        if (memo[index][c] !== -1) return memo[index][c]
        
        // 不考虑放入第index + 1个物品
        let res = bestValue(w, v, index - 1, c)
        // 考虑放入第index+1个物品
        if (c >= w[index]) {
            // 两者取最大值
            res = Math.max(res, v[index] + bestValue(w, v, index - 1, c - w[index]))
        }
    
        memo[index][c] = res
        
        return res
    }
    
    const memo = []
    
    for (let i = 0; i < w.length; i++) {
        const cur = []
        for (let j = 0; j <= c; j++) {
            cur.push(-1)
        }
        memo.push(cur)
    }
    
    return bestValue(w, v, w.length - 1, c)
}
