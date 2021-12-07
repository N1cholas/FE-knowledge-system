/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let currentElement = null
    let count = 0
    
    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            currentElement = nums[i]
        }
        
        if (currentElement === nums[i]) {
            count++
        } else {
            count--
        }
    }
    
    count = 0
    
    for (let j = 0; j < nums.length; j++) {
        if (currentElement === nums[j]) count++
    }
    
    return count * 2 > nums.length ? currentElement : -1
};
