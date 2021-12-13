/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = []
  
  for (let i = 0, len = s.length; i < len; i++) {
    let cur = stack[stack.length - 1]
    if (cur === '(' && s.charAt(i) === ')' ||
        cur === '[' && s.charAt(i) === ']' ||
        cur === '{' && s.charAt(i) === '}'
    ) {
      stack.pop()
    } else {
      stack.push(s.charAt(i))
    }
  }
  
  return stack.length === 0
};
