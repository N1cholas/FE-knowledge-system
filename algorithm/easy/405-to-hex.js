/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if (num === 0) return '0'
    
    if (num < 0) num = Math.pow(2, 32) + num
    
    let ans = ''
    
    const map = new Map([
        [10, 'a'],
        [11, 'b'],
        [12, 'c'],
        [13, 'd'],
        [14, 'e'],
        [15, 'f']
    ])
    
    while (num) {
        const cur = map.has(num % 16) ? map.get(num % 16) : num % 16
        
        ans = cur + ans
        
        num = ~~(num / 16)
    }
    
    return ans
};
