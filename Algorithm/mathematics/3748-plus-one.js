/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let isNot9Index = -1
    
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] !== 9) {
            isNot9Index = i
            break
        }
    }
    
    if (isNot9Index === - 1) {
        const res = new Array(digits.length + 1).fill(0)
        res[0] = 1
        return res
    }
    
    digits[isNot9Index]++
    
    for (let j = isNot9Index + 1; j < digits.length; j++) {
        digits[j] = 0
    }
    
    return digits
};
