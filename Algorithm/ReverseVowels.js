/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let left = 0
    let right = s.length - 1
    const str = s.split('')
    
    const map = new Map([
        ['a', 'a'],
        ['e', 'e'],
        ['i', 'i'],
        ['o', 'o'],
        ['u', 'u'],
        ['A', 'A'],
        ['E', 'E'],
        ['I', 'I'],
        ['O', 'O'],
        ['U', 'U']
    ])
    
    function swap(array, i, j) {
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    
    while (left <= right) {
        while (left < right) {
            if (map.has(str[left])) {
                break
            }
            left++
        }
        while (left < right) {
            if (map.has(str[right])) {
                break
            }
            right--
        }
        swap(str, left, right)
        left++
        right--
    }
    
    return str.join('')
};
