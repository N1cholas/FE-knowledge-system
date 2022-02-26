/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0
    let start = 0
    const map = new Map()
    
    for (let end = 0; end < s.length; end++) {
        const cur = s.charAt(end)
        
        if (map.has(cur)) {
            start = Math.max(
                start,
                map.get(cur)
            )
        }
        
        map.set(s.charAt(end), end + 1)
        
        max = Math.max(max, end - start + 1)
    }
    
    return max
};
