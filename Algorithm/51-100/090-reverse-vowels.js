/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let left = 0
    let right = s.length - 1
    const set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    const format = s.split('')
    
    while (left <= right) {
        while (left < right && !set.has(format[left])) {
            left++
        }
        while (left < right && !set.has(format[right])) {
            right--
        }
        
        [format[left], format[right]] = [format[right], format[left]]
        left++
        right--
    }
    
    return format.join('')
};

console.log(reverseVowels('hello'))
