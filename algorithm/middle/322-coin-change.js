/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// memory search
var coinChange = function(coins, amount) {
    function tryChange(coins, amount) {
        if (amount === 0) {
            return 0
        }
        
        if (memo[amount] !== -1) return memo[amount]
        
        let res = max
        for (let i = 0; i < coins.length; i++) {
            if (amount - coins[i] >= 0) {
                res = Math.min(res, 1 + tryChange(coins, amount - coins[i]))
            }
        }
        
        memo[amount] = res
        
        return res
    }
    
    const memo = new Array(amount + 1).fill(-1)
    
    const max = Infinity
    
    const ans = tryChange(coins, amount, 0)
    
    return ans === max ? -1 : ans
};

// dynamic program
var coinChange2 = function(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity)
    
    dp[0] = 0
    
    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (i - coins[j] >= 0) {
                dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]])
            }
        }
    }
    
    return dp[amount] === Infinity ? -1 : dp[amount]
};
