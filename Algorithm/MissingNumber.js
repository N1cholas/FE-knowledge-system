/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let left = 0
    let right = nums.length - 1
    
    while (left <= right) {
        const mid = Math.floor((right - left) / 2) + left
        
        if (nums[mid] === mid) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    
    return left
};
