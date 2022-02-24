/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */

// greed
// 贪心的思想：把最大的饼干分给胃口最大的小朋友，那么后面的最大的饼干也是分给后面胃口最大的小朋友
var findContentChildren = function(g, s) {
    g.sort((a, b) => b - a)
    s.sort((a, b) => b - a)
    
    let gi = 0
    let si = 0
    
    while (gi < g.length) {
        if (s[si] >= g[gi]) {
            si++
        }
        gi++
    }
    
    return si
};
