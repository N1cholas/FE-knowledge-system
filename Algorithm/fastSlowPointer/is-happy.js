/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    function getNext(n) {
        let res = 0
        while (n) {
            res += Math.pow(n % 10, 2)
            n = ~~(n / 10)
        }
        return res
    }
    
    let slowPointer = n
    let fastPointer = getNext(n)
    
    while (fastPointer !== slowPointer) {
        if (fastPointer === 1) return true
        
        slowPointer = getNext(slowPointer)
        fastPointer = getNext(getNext(fastPointer))
    }
    
    return false
};
