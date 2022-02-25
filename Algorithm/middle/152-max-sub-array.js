/**
 * @param {number[]} nums
 * @return {number}
 */

var maxProduct = function(nums) {
    let ans = -Infinity
    let max = 1
    let min = 1
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            [max, min] = [min, max]
        }
        
        max = Math.max(nums[i], nums[i] * max)
        min = Math.min(nums[i], nums[i] * min)
        
        ans = Math.max(ans, max)
    }
    
    return ans
};
