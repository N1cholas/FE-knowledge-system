// Longest harmonic subsequence
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let ans = 0
    
    nums.sort((a, b) => a - b)
    
    let left = 0
    let right = 0
    
    while (right < nums.length) {
        if (left < right && nums[right] - nums[left] > 1) left++
        
        if (nums[right] - nums[left] === 1) ans = Math.max(ans, right - left + 1)
        
        right++
    }
    
    return ans
};
