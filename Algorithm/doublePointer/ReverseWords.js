/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(' ').map(str => {
        let left = 0
        let right = str.length - 1
        const formatStr = str.split('')
    
        while (left <= right) {
            const temp = formatStr[left]
            formatStr[left] = formatStr[right]
            formatStr[right] = temp
            
            left++
            right--
        }
        
        return formatStr.join('')
    }).join(' ')
};
