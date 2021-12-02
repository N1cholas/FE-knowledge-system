/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let left = 0
  let right = 1

  while (right < nums.length) {
    if (nums[left] !== nums[right]) {
      swap(nums, ++left, right)
    }
    right++
  }

  function swap(array, i, j) {
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }

  return left + 1
};
