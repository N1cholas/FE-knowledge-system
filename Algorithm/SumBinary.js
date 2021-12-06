/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let res = ''
    let k = 0
    let l1 = a.length - 1
    let l2 = b.length - 1
    
    while (l1 >= 0 || l2 >= 0) {
        const s1 = a.charAt(l1) ? Number(a.charAt(l1)) : 0
        const s2 = b.charAt(l2) ? Number(b.charAt(l2)) : 0
        
        res = (s1 + s2 + k) % 2 + res
        k = ~~((s1 + s2 + k) / 2)
        
        l1--
        l2--
    }
    
    return k ? k + res : res
};

console.log(addBinary('11', '1'))
