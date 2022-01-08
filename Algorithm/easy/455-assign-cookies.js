/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => b - a)
    s.sort((a, b) => b - a)
    
    let gi = 0
    let si = 0
    let counts = 0
    
    while (gi < g.length && si < s.length) {
        if (s[si] >= g[gi]) {
            counts++
            si++
            gi++
        } else {
            gi++
        }
    }
    
    return counts
};
