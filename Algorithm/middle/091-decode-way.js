/**
 * @param {string} s
 * @return {number}
 */

// memory search
var numDecodings = function(s) {
    function dfs(s, start) {
        if (start >= s.length) return 1
        if (s[start] === '0') return 0
        
        if (memo[start] !== -1) return memo[start]
        
        let res = dfs(s, start + 1)
        if (start + 1 < s.length && Number(s.slice(start, start + 2)) <= 26) {
            res += dfs(s, start + 2)
        }
        
        memo[start] = res
        
        return res
    }
    
    const memo = new Array(s.length).fill(-1)
    
    return dfs(s, 0)
};
