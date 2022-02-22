/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    if (s.length !== goal.length) return false
    
    if (s === goal) {
        return new Set(s).size !== goal.length
    }
    
    let first = -1
    let second = -1
    
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) !== goal.charAt(i)) {
            if (first === -1) {
                first = i
            } else if (second === -1) {
                second = i
            } else {
                return false
            }
        }
    }
    
    return second !== -1 && s.charAt(first) === goal.charAt(second) && s.charAt(second) === goal.charAt(first)
};
