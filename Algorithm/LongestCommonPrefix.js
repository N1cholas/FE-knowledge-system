/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix1 = function (strs) {
  const formatStrs = strs.sort((a, b) => a.length < b.length ? -1 : 1)

  let res = ''

  const firstStr = formatStrs[0]

  let curS = ''

  for (let i = 0, len = firstStr.length; i < len; i++) {
    curS = firstStr.charAt(i)

    if (strs.every(str => str.charAt(i) === curS)) {
      res += curS
    }
  }

  return res
};

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix2 = function (strs) {
  return strs.reduce((p, c) => {
    let res = ''

    for (let i = 0, len = c.length; i < len; i++) {
      if (c.charAt(i) === p.charAt(i)) res += c.charAt(i)
      else break
    }

    return res
  })
};
