/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    let left = 0
    let right = 0
    
    while (right < nums.length) {
        if (nums[right] % 2 === 1) {
            [nums[left], nums[right]] = [nums[right], nums[left]]
            left++
        }
        right++
    }
    
    return nums
};
