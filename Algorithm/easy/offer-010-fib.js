/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const memo = new Array(n + 1)
    
    memo[0] = 0
    memo[1] = 1
    
    for (let i = 2; i <= n; i++) {
        memo[i] = (memo[i - 1] + memo[i - 2]) % 1000000007
    }
    
    return memo[n]
};
