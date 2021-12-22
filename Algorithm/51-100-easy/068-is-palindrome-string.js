/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const format = s.toLocaleLowerCase().replace(/[^0-9a-z]/g, '')
    
    let left = 0
    let right = format.length - 1
    
    while (left <= right) {
        if (format.charAt(left) !== format.charAt(right)) return false
        left++
        right--
    }
    
    return true
};
