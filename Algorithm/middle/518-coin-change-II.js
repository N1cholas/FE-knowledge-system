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
var change2 = function(amount, coins) {
    const dp = new Array(amount + 1).fill(0)
    
    dp[0] = 1

    for (let i = 0; i < coins.length; i++) {
        for (let j = coins[i]; j <= amount; j++) {
            dp[j] += dp[j - coins[i]]
        }
    }
    
    return dp[amount]
};
