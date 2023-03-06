/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */

// explain 👇
// https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/solution/huan-ge-jiao-du-ju-li-jie-jue-yue-se-fu-huan-by-as/

var lastRemaining = function(n, m) {
    let pos = 0
    
    for (let i = 2; i <= n; i++) {
        pos = (pos + m) % i
    }
    
    return pos
};
