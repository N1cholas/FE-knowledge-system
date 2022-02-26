/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let k = 0
    
    for (let i = 0, len = nums.length; i < len; i++) {
        if (nums[i]) {
            [nums[i], nums[k]] = [nums[k], nums[i]]
            k++
        }
    }
};
