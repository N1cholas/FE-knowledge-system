/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    const min = Math.min.apply(null, nums)
    let count = 0
    
    for (let i = 0; i < nums.length; i++) {
        count += nums[i] - min
    }
    
    return count
};
