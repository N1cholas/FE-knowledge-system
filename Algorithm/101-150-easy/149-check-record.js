/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let A = 0
    let L = 0
    let times = 0
    
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === 'A') {
            A++
            times = 0
            if (A >= 2) {
                return  false
            }
        } else if (s.charAt(i) === 'L') {
            L++
            times++
            if (times === 3) {
                return false
            }
        } else {
            times = 0
        }
    }
    
    return true
};
