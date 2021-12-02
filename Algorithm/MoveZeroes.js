/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let right = 0
  let left = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      swap(nums, left, right)
      left++
    }
    right++
  }

  function swap(array, i, j) {
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
};
