/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    return strs.reduce((p, c) => {
        let commonPrefix = ''
        
        for (let i = 0, len = c.length; i < len; i++) {
            if (p.charAt(i) === c.charAt(i)) {
                commonPrefix += c.charAt(i)
            } else {
                break
            }
        }
        
        return commonPrefix
    })
};
