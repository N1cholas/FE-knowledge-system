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
    
    const set = new Set()
    
    while (n !== 1) {
        const next = getNext(n)
        
        if (set.has(next)) return false
        else {
            set.add(next)
            n = next
        }
    }
    
    return true
};

console.log(isHappy(2))
