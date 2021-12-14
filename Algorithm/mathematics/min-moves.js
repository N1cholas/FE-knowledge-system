/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let count = 0
    const min = Math.min.apply(null, nums)
    
    for (let i = 0; i < nums.length; i++) {
        count += nums[i] - min
    }
    
    return count
};
