/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const set = new Set()
    
    for (let i = 0, len = nums.length; i < len; i++) {
        const n = nums[i]
        
        if (set.has(n)) return true
        else set.add(n)
    }
    
    return false
};
