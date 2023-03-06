/**
 * @param {string} digits
 * @return {string[]}
 */

// source: https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/

var letterCombinations = function(digits) {
    if (!digits.length) return []
    
    const res = []
    
    tryCombine(digits, 0, [], res)
    
    return res
};

const map = new Map([
    ['1', ''],
    ['2', 'abc'],
    ['3', 'def'],
    ['4', 'ghi'],
    ['5', 'jkl'],
    ['6', 'mno'],
    ['7', 'pqrs'],
    ['8', 'tuv'],
    ['9', 'wxyz'],
    ['0', ' '],
])

const tryCombine = (digits, index, current, res) => {
    if (digits.length === index) {
        return res.push(current.slice().join(''))
    }
    
    const letters = map.get(digits.at(index))
    
    for(let i = 0, len = letters.length; i < len; i++) {
        current.push(letters.at(i))
        tryCombine(digits, index + 1, current, res)
        current.pop()
    }
}
