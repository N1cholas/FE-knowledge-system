/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let p1 = num1.length - 1
    let p2 = num2.length - 1
    let res = ''
    let k = 0
    
    while(p1 >= 0 || p2 >= 0) {
        const n1 = num1.charAt(p1) ? Number(num1.charAt(p1)) : 0
        const n2 = num2.charAt(p2) ? Number(num2.charAt(p2)) : 0
        
        res = (n1 + n2 + k) % 10 + res
        
        k = ~~((n1 + n2 + k) / 10)
        
        p1--
        p2--
    }
    
    return k ? k + res : res
};
