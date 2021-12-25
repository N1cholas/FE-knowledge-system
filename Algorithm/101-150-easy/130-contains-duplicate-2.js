/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const array = []
    
    for (let i = 0, len = nums.length; i < len; i++) {
        if (array.indexOf(nums[i]) !== -1) return true
        
        array.push(nums[i])
        
        if (array.length > k) {
            array.shift()
        }
    }
    
    return false
};
