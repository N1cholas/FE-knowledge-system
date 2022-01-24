/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(' ').map(str => {
        let left = 0
        let right = str.length - 1
        const res = str.split('')
        
        while (left <= right) {
            [res[left], res[right]] = [res[right], res[left]]
            left++
            right--
        }
        
        return res.join('')
    }).join(' ')
};
