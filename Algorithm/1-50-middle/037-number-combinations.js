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
    
    function findCombinations(digits, index, s, res) {
        if (index === digits.length) {
            return res.push(s)
        }
        
        const letter = map.get(digits.charAt(index))
        
        for (let i = 0; i < letter.length; i++) {
            findCombinations(digits, index + 1, s + letter.charAt(i), res)
        }
    }
    
    const res = []
    
    if (!digits.length) return res
    
    findCombinations(digits, 0, '', res)
    
    return res
};

// https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
