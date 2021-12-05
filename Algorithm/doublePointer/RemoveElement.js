/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let left = 0
    let right = 0
    
    while (right < nums.length) {
        if (nums[right] !== val) {
            swap(nums, left++, right)
        }
        right++
    }
    
    function swap(nums, i, j) {
        const temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }
    
    return left
};
