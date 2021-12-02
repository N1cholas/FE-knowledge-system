/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  function reverseWord(word) {
    let left = 0
    let right = word.length - 1
    const wordArray = word.split('')

    while (left <= right) {
      swap(wordArray, left, right)
      left++
      right--
    }

    function swap(array, i, j) {
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }

    return wordArray.join('')
  }

  return s.split(' ').map(str => reverseWord(str)).join(' ')
};
