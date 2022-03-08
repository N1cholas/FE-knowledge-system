/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

// DFS + memory search
var wordBreak = function(s, wordDict) {
    const set = new Set(wordDict)
    const memo = new Array(s.length).fill(-1)
    
    function tryBreak(s, index) {
        if (index === s.length) {
            return true
        }
        
        if (memo[index] !== -1) return memo[index]
        
        for(let i = 0, len = s.length; i < len; i++) {
            const prefix = s.slice(index, i + 1)
            
            if (set.has(prefix) && tryBreak(s, i + 1)) {
                memo[index] = true
                return true
            }
        }
        
        memo[index] = false
        
        return false
    }
    
    return tryBreak(s, 0)
};

// dynamic program
// 子问题：子串能否被分割
// dp[i]代表s[0, i - 1]的字符串可以被wordDict分割
// 状态转移
// 以j进行分割，[0, j - 1] [j, i - 1] 均能被wordDict分割
// 其中[0, j - 1]存储在dp[j]中
var wordBreak = function(s, wordDict) {
    const n = s.length
    
    const wordSet = new Set(wordDict)
    
    const dp = new Array(n + 1).fill(false)
    
    dp[0] = true
    
    for(let i = 1; i <= n; i++) {
        for(let j = 0; j < i; j++) {
            if (dp[j] && wordSet.has(s.substr(j, i - j))) {
                dp[i] = true
                break
            }
        }
    }
    
    return dp[n]
};
