/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

// memory search
var wordBreak = function(s, wordDict) {
    function tryBreak(s, index, wordDict) {
        if (s.length === index) {
            return true
        }
        
        if (memo[index] !== -1) return memo[index]
        
        for (let i = 0; i < wordDict.length; i++) {
            const wordLen = wordDict[i].length
            
            if (s.length - index >= wordLen && s.substr(index, wordLen) === wordDict[i] && tryBreak(s, index + wordLen, wordDict)) {
                return memo[index] = true
            }
        }
        
        return memo[index] = false
    }
    
    const memo = new Array(s.length + 1).fill(-1)
    
    return tryBreak(s, 0, wordDict)
};
