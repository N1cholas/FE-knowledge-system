/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    return strs.reduce((p, c) => {
        let res = ''
        
        for(let i = 0; i < c.length; i++) {
            if (c.charAt(i) === p.charAt(i)) res += c.charAt(i)
            else break
        }
        
        return res
    })
};
