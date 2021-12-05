/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let left = 0
    
    for (let i = 0, len = nums.length; i < len; i++) {
        if (nums[i] !== 0) {
            swap(nums, i, left)
            left++
        }
    }
    
    function swap(array, i, j) {
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
};
