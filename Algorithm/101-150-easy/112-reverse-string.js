/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    const formatStr = s.split('')
    
    for (let i = 0; i < formatStr.length; i += 2 * k) {
        reverse(formatStr, i, Math.min(i + k, formatStr.length) - 1)
    }
    
    return formatStr.join('')
};

function reverse(a, l, r) {
    while (l <= r) {
        [a[r], a[l]] = [a[l], a[r]]
        l++
        r--
    }
}
