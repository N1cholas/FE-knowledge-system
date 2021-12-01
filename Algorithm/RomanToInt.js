/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = new Map([
      ['I', 1],
      ['V', 5],
      ['X', 10],
      ['L', 50],
      ['C', 100],
      ['D', 500],
      ['M', 1000]
    ]
  )

  const strs = s.split('').map(str => map.get(str))

  let res = 0

  for (let i = 0, len = strs.length; i < len; i++) {
    if (strs[i + 1] && strs[i] < strs[i + 1]) {
      res -= strs[i]
    } else {
      res += strs[i]
    }
  }

  return res
};
