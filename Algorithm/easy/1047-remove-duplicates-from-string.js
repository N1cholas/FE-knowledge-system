/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    const stack = []
    
    for (let i = 0; i < s.length; i++) {
        const cur = s.charAt(i)
        
        if (stack[stack.length - 1] === cur) {
            stack.pop()
        } else {
            stack.push(cur)
        }
    }
    
    return stack.join('')
};
