/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const res = []

  for (let i = 0, len = s.length; i < len; i++) {

    if (res[res.length - 1] === '(' && s.charAt(i) === ')'
      || res[res.length - 1] === '[' && s.charAt(i) === ']'
      || res[res.length - 1] === '{' && s.charAt(i) === '}'
    ) {
      res.pop()
    } else {
      res.push(s.charAt(i))
    }
  }

  return res.length === 0
};
