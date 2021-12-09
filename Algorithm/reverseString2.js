/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    const formatStr = s.split('')
    const len = formatStr.length
    
    for (let i = 0; i < len; i += 2 * k) {
        reverse(formatStr, i, Math.min(i + k, len) - 1)
    }
    
    function reverse(a, i, j) {
        while (i <= j) {
            const temp = a[i]
            a[i] = a[j]
            a[j] = temp
            i++
            j--
        }
    }
    
    return formatStr.join('')
};
