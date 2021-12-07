/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    const map = new Map()
    
    for (let i = 0, len = nums.length; i < len; i++) {
        const cur = nums[i]
        
        if (map.has(cur)) map.set(cur, map.get(cur) + 1)
        else map.set(cur, 1)
    }
    
    for (const [key, value] of map.entries()) {
        if (value > 1) return key
    }
    
    return 0
};