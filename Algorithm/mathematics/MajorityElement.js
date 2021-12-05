/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const sorted = nums.sort((a, b) => a - b)
    
    return sorted[Math.floor(sorted.length / 2)]
};
