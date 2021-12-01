/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let i = num1.length - 1
  let j = num2.length - 1
  let k = 0
  let res = []

  while(i >= 0 || j >= 0 || k !== 0) {
    const x = i >= 0 ? Number(num1.charAt(i)) : 0
    const y = j >= 0 ? Number(num2.charAt(j)) : 0
    const sum = x + y + k
    res.push(sum % 10)
    k = ~~(sum / 10)
    i--
    j--
  }

  return res.reverse().join('')
};
