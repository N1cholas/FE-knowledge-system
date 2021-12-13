/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let res = ''
    let k = 0
    let p1 = a.length - 1
    let p2 = b.length - 1
    
    while (p1 >= 0 || p2 >= 0) {
        const cur1 = a.charAt(p1) ? Number(a.charAt(p1)) : 0
        const cur2 = b.charAt(p2) ? Number(b.charAt(p2)) : 0
        
        res = (cur1 + cur2 + k) % 2 + res
        k = ~~((cur1 + cur2 + k) / 2)
        
        p1--
        p2--
    }
    
    return k ? k + res : res
};
