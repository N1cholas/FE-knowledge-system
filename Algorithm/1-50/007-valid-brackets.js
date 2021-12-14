/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []
    
    for (let i = 0; i < s.length; i++) {
        if (
            stack[stack.length - 1] === '(' && s.charAt(i) === ')'
            || stack[stack.length - 1] === '[' && s.charAt(i) === ']'
            || stack[stack.length - 1] === '{' && s.charAt(i) === '}'
        ) {
            stack.pop()
        } else {
            stack.push(s.charAt(i))
        }
    }
    
    return stack.length === 0
};
