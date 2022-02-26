/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let p1 = a.length - 1
    let p2 = b.length - 1
    let k = 0
    let res = ''
    
    while (p1 >= 0 || p2 >= 0) {
        const n1 = a.charAt(p1) ? Number(a.charAt(p1)) : 0
        const n2 = b.charAt(p2) ? Number(b.charAt(p2)) : 0
        
        res = (n1 + n2 + k) % 2 + res
        k = ~~((n1 + n2 + k) / 2)
        
        p1--
        p2--
    }
    
    return k ? k + res : res
};
