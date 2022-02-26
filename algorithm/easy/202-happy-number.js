/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const set = new Set()
    
    while (n !== 1) {
        const next = getNext(n)
        
        if (set.has(next)) return false
        else set.add(next)
        
        n = next
    }
    
    return true
};

function getNext(n) {
    let sum = 0
    
    while (n) {
        sum += (n % 10) ** 2
        n = ~~(n / 10)
    }
    
    return sum
}
