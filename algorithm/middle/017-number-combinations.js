/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
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
    
    function tryCombine(digits, index, current, res) {
        if (index === digits.length) {
            return res.push(current.slice().join(''))
        }
        
        const alphabet = map.get(digits[index])
        
        for (let i = 0; i < alphabet.length; i++) {
            current.push(alphabet[i])
            tryCombine(digits, index + 1, current, res)
            current.pop()
        }
    }
    
    const res = []
    
    if (!digits.length) return []
    
    tryCombine(digits, 0, [], res)
    
    return res
};
