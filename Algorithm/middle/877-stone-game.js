/**
 * @param {number[]} piles
 * @return {boolean}
 */

// f(l, r) => 在[l, r]之间两个玩家的最大差值，差值大于1，先手赢

// memory search
var stoneGame = function(piles) {
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

// dynamic program
var stoneGame2 = function(piles) {
    const dp = new Array(piles.length).fill(0).map(() => new Array(piles.length).fill(0))
    
    for (let i = 0; i < piles.length; i++) {
        dp[i][i] = piles[i]
    }
    
    for (let i = piles.length - 2; i >= 0; i--) {
        for (let j = i + 1; j < piles.length; j++) {
            dp[i][j] = Math.max(piles[i] - dp[i - 1][j], piles[j] - dp[i][j - 1])
        }
    }
    
    return dp[0][piles.length - 1]
};
