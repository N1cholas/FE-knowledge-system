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
var wordBreak2 = function(s, wordDict) {
    const wordSet = new Set(wordDict);
    const len = s.length;
    const dp = new Array(len + 1).fill(false);
    dp[0] = true;
    
    for (let i = 1; i <= s.length; i++) {
        for (let j = i - 1; j >= 0; j--) { // 使用 j 进行分割
            const suffix = s.slice(j, i)    // 获取s[j, i) 字符
            if (dp[j] && wordSet.has(suffix)) { // s[0, j - 1] 并且 s[j, i)都能被分割
                dp[i] = true
                break
            }
        }
    }
    
    return dp[len]
}
