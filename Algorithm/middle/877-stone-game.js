/**
 * @param {number[]} piles
 * @return {boolean}
 */

// source: https://leetcode-cn.com/problems/stone-game/

// dynamic program
// 定义dp: dp[i][j] 表示[i, j]区间内两个玩家的差值
// 状态dp:
//   f(i, j) = max{ piles[i] - f(i + 1. j), piles[j] - f(i, j - 1) }
// 初始化: dp[i][j] = 0
// 边界: i === j & dp[i][j] = piles[i]
var stoneGame = function(piles) {
    const n = piles.length
    
    const dp = new Array(n).fill(0).map(_ => new Array(n).fill(0))
    
    for(let i = 0; i < n; i++) {
        dp[i][i] = piles[i]
    }
    
    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            dp[i][j] = Math.max(piles[i] - dp[i + 1][j], piles[j] - dp[i][j - 1])
        }
    }
    
    return dp[0][n - 1] > 0
};

// memory search
var stoneGame2 = function(piles) {
    function tryGet(piles, l, r) {
        if (l + 1 === r) {
            return piles[l]
        }
        
        if (memo[l][r] !== -1) return memo[l][r]
        
        
        
        const res =  Math.max(
            piles[l] - tryGet(piles, l + 1, r),
            piles[r] - tryGet(piles, l, r - 1)
        )
        
        memo[l][r] = res
        
        return res
    }
    
    const memo = new Array(piles.length).fill(-1).map(_ => new Array(piles.length).fill(-1))
    
    return tryGet(piles, 0, piles.length - 1)
};
