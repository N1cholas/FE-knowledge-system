/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const getNext = n => {
        let res = 0
        while (n) {
            const x = n % 10
            res += Math.pow(x, 2)
            n = ~~(n / 10)
        }
        return res
    }
    
    const set = new Set()
    
    let res = getNext(n)
    
    while (!set.has(res)) {
        if (res === 1) return true
        
        set.add(res)
        
        res = getNext(res)
    }
    
    return false
};

console.log(isHappy(2))
