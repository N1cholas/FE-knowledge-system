/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let counts = 0
    let prev = -1
    const len = flowerbed.length
    
    for (let i = 0; i < len; i++) {
        if (flowerbed[i] === 1) {
            if (prev < 0) {
                counts += ~~(i / 2)
            } else {
                counts += ~~((i - prev - 2) / 2)
            }
            prev = i
        }
    }
    
    if (prev < 0) {
        counts += ~~((len + 1) / 2)
    } else {
        counts += ~~((len - prev - 1) / 2)
    }
    
    return counts >= n
};

console.log(canPlaceFlowers([1,0,0,0,1]
    ,1))
