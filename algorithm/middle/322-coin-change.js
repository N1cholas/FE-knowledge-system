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
// 定义dp: dp[i] 表示凑成金额i最少硬币个数
// 确定状态方程: f(i) = min{ f(i), 1 + f(i - coin) } && i - coin >= 0 && coin in coins
// 确定边界: f(0) 凑成金额0的最少硬币个数为0
var coinChange2 = function(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity)
    
    dp[0] = 0
    
    for(let i = 1; i <= amount; i++) {
        for(const coin of coins) {
            if (i - coin >= 0) dp[i] = Math.min(dp[i], 1 + dp[i - coin])
        }
    }
    
    return dp[amount] === Infinity ? -1 : dp[amount]
};
