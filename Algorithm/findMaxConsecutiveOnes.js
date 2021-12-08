/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0
    let accumulate = 0

    for (let i = 0; i <= nums.length; i++) {
        if (nums[i] === 1) {
            accumulate++
        } else {
            max = Math.max(accumulate, max)
            accumulate = 0
        }
    }
    
    return max
};
