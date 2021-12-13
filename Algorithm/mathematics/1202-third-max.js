/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let a, b, c
    
    a = b = c = -Infinity
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > a) {
            c = b
            b = a
            a = nums[i]
        } else if (a > nums[i] && nums[i] > b) {
            c = b
            b = nums[i]
        } else if (b > nums[i] && nums[i] > c) {
            c = nums[i]
        }
    }
    
    return c === -Infinity ? a : c
};
