/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0]
    
    for (let i = 1, len = nums.length; i < len; i++) {
        if (nums[i - 1] > 0) {
            nums[i] += nums[i - 1]
        }
        
        max = Math.max(max, nums[i])
    }
    
    return max
};
