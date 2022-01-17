/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const len = nums.length
    const set = new Set()
    
    for (let i = 0; i < len; i++) {
        const n = nums[i]
        
        if (set.has(n))
            return true
        else
            set.add(n)
        
        if (set.size === k + 1) {
            set.delete(nums[i - k])
        }
    }
    
    return false
};
