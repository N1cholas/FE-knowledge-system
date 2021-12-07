/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const map = new Map()
    
    for (let i = 0, len = nums.length; i < len; i++) {
        if (map.has(nums[i])) return true
        else map.set(nums[i], i)
    }
    
    return false
};