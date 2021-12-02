/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const formatX = (x + '').split('')
  let left = 0
  let right = formatX.length - 1

  while (left <= right) {
    if (formatX[left++] !== formatX[right--]) {
      return false
    }
  }

  return true
};
