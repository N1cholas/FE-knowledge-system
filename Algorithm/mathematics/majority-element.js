/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let candidate = -1
    let count = 0
    
    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            candidate = nums[i]
        }
        
        if (nums[i] === candidate) {
            count++
        } else {
            count--
        }
    }
    
    count = 0
    
    for (let j = 0; j < nums.length; j++) {
        if (candidate === nums[j]) count++
    }
    
    return count * 2 > nums.length ? candidate : -1
};
