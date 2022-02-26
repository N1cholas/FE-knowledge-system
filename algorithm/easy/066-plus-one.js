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
    
    digits[isNot9Index]++
    
    for (let i = digits.length - 1; i > isNot9Index; i--) {
        digits[i] = 0
    }
    
    return digits[0] === 0 ? [1].concat(digits) : digits
};
