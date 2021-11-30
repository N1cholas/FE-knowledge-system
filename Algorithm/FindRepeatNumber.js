/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  const set = new Set()

  for (let i = 0, len = nums.length; i < len; i++) {
    if (set.has(nums[i])) return nums[i]
    else set.add(nums[i])
  }
};
