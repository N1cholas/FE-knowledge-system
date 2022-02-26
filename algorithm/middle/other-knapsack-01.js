// 01背包问题
/**
 * @param {number[]} w 每件物品的重量
 * @param {number[]} v 每件物品的价值
 * @param {number}   c 背包容量
 * @return {number}
 */

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

// dynamic program
function knapsack2(w, v, c) {
    const n = w.length
    const dp = []
    
    for (let i = 0; i < n; i++) {
        dp.push(new Array(c + 1).fill(-1))
    }
    
    for (let i = 0; i <= c; i++) {
        dp[0][i] = i >= w[i] ? v[0] : 0
    }
    
    for (let i = 1; i < n; i++) {
        for (let j = 0; j <= c; j++) {
            dp[i][j] = dp[i - 1][j]
            if (j >= w[i]) {
                dp[i][j] = Math.max(dp[i][j], v[i] + dp[i - 1][j - w[i]])
            }
        }
    }
    
    return dp[n - 1][c]
}
