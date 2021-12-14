/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    const res = []
    
    while (columnNumber) {
        columnNumber--
        const code = String.fromCharCode(columnNumber % 26 + 'A'.charCodeAt())
        columnNumber = ~~(columnNumber / 26)
        res.push(code)
    }
    
    return res.reverse().join('')
};
