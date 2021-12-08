/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    const res = []
    
    while (columnNumber) {
        columnNumber--
        const curStr = String.fromCharCode(columnNumber % 26 + 'A'.charCodeAt())
        res.push(curStr)
        columnNumber = ~~(columnNumber / 26)
    }
    
    return res.reverse().join('')
};
