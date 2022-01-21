/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    return strs.reduce((pre, cur) => {
        let res = ''
        for (let i = 0; i < pre.length; i++) {
            if (pre.charAt(i) === cur.charAt(i)) res += pre.charAt(i)
            else break
        }
        return res
    })
};
