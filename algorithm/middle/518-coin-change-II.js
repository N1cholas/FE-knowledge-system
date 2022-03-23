/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */

// memory search
var change = function(amount, coins) {
    function tryChange(amount, coins, index) {
        if (index === coins.length) {
            return amount === 0 ? 1 : 0
        }
        
        if (memo[index][amount] !== -1) return memo[index][amount]
        
        let res = 0
        for (let i = 0; i * coins[index] <= amount; i++) {
            res += tryChange(amount - i * coins[index], coins, index + 1)
        }
    
        memo[index][amount] = res
        
        return res
    }
    
    const memo = new Array(coins.length).fill(0).map(() => new Array(amount + 1).fill(-1))
    
    const res = tryChange(amount, coins, 0)
    
    return res === -1 ? 0 : res
};

// dynamic program
// 定义dp: dp[i] 表示组成金额i的方案数
// 状态转移:
// f(i) = f(i) + f(i - coins[i - 1])
// 边界: dp[0] = 1
var change2 = function(amount, coins) {
    const dp = new Array(amount + 1).fill(0)
    
    dp[0] = 1
    
    for(const coin of coins) {
        for(let i = 1; i <= amount; i++) {
            i >= coin && (dp[i] += dp[i - coin])
        }
    }
    
    return dp[amount]
};
