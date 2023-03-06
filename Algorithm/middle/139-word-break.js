/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

// source https://leetcode-cn.com/problems/word-break/

// dynamic program
// 定义dp: dp[i] 表示前i个字符是否能被字典中单词拼接
// 状态转移:
//   f(i) = f(j) && s.substr(j, i - j) in wordDict
// 初始化: dp[i] = false
// 边界: dp[0] = true
var wordBreak = function(s, wordDict) {
    const n = s.length
    
    const wordDictSet = new Set(wordDict)
    
    const dp = new Array(n + 1).fill(false)
    
    dp[0] = true
    
    for(let i = 1; i <= n; i++) {
        for(let j = 0; j < i; j++) {
            if (dp[j] && wordDictSet.has(s.substr(j, i - j))) {
                dp[i] = true
                break
            }
        }
    }
    
    return dp[n]
};

// DFS + memory search
var wordBreak2 = function(s, wordDict) {
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
