/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    const min = Math.min.apply(null, nums)
    let moves = 0
    
    for (let i = 0; i < nums.length; i++) {
        moves += nums[i] - min
    }
    
    return moves
};
