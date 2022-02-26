/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const memo = new Array(256).fill(0)
    const len = s.length
    let l = 0
    let r = -1
    let max = 0
    
    while (l < len) {
        if (r + 1 < len && memo[s.charCodeAt(r + 1)] === 0) {
            memo[s.charCodeAt(r + 1)]++
            r++
        } else {
            memo[s.charCodeAt(l)]--
            l++
        }
        
        max = Math.max(max, r - l + 1)
    }
    
    return max
};

console.log(lengthOfLongestSubstring("pwwkew"))
