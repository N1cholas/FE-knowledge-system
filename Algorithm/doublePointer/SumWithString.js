/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let l1 = num1.length - 1
    let l2 = num2.length - 1
    let res = ''
    let k = 0
    
    while (l1 >= 0 || l2 >= 0) {
        const n1 = num1.charAt(l1) ? Number(num1.charAt(l1)) : 0
        const n2 = num2.charAt(l2) ? Number(num2.charAt(l2)) : 0
    
        res = (n1 + n2 + k) % 10 + res
    
        k = ~~((n1 + n2 + k) / 10)
        
        l1--
        l2--
    }
    
    return k ? k + res : res
};

console.log(addStrings('588', '18'))
