/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = -Infinity
    let count = 0
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++
        } else {
            max = Math.max(max, count)
            count = 0
        }
    }
    
    return Math.max(max, count)
};
