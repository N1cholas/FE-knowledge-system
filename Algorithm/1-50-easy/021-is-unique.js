/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function(astr) {
    const map = {}
    
    for(let i = 0; i < astr.length; i++) {
        if (map[astr.charAt(i)]) {
            return false
        } else {
            map[astr.charAt(i)] = i + 1
        }
    }
    
    return true
};
