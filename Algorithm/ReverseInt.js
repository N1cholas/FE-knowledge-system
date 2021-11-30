/**
 * @param {number} x
 * @return {number}
 */
var reverse1 = function (x) {
  let res = parseInt(x.toString().split('').reverse().join(''))

  if (x < 0) {
    res = -res
  }

  return (res > Math.pow(2, 31) || res < -Math.pow(2, 31)) ? 0 : res
};

/**
 * @param {number} x
 * @return {number}
 */
var reverse2 = function (x) {
  let res = 0
  const maxValue = Math.pow(2, 31)

  while (x) {
    res = res * 10 + x % 10

    if (res > maxValue || res < -maxValue) return 0

    x = ~~(x / 10)
  }

  return res
}
