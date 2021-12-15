/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let left = 0
    let right = 1
    
    while(right < nums.length) {
        if (nums[right] !== nums[left]) {
            left++
            [nums[right], nums[left]] = [nums[left], nums[right]]
        }
        right++
    }
    
    return left + 1
};
