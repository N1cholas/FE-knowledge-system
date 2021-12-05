/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let left = 0
    let right = 0
    
    while (right < nums.length) {
        if (nums[left] !== nums[right]) {
            swap(nums, ++left, right)
        }
        right++
    }
    
    function swap(nums, i, j) {
        const temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }
    
    return left + 1
};
