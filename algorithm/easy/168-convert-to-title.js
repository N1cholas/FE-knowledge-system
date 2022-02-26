/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let res = ''
    
    while (columnNumber) {
        columnNumber--
        
        res = String.fromCharCode(columnNumber % 26 + 'A'.charCodeAt()) + res
        
        columnNumber = ~~(columnNumber / 26)
    }
    
    return res
};
