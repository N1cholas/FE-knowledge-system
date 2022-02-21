/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const len = nums.length
    const total = ~~(len * (len + 1) / 2)
    let sum = 0
    
    for (let i = 0; i < len; i++) {
        sum += nums[i]
    }
    
    return total - sum
};
