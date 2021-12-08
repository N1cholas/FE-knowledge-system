/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let thirdMaxIndex = 0
    
    nums.sort((a, b) => b - a)
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            thirdMaxIndex++
        }
        
        if (thirdMaxIndex === 2) {
            return nums[i]
        }
    }
    
    return nums[0]
};
