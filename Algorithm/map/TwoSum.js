/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map()
    
    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i]
        
        if (map.has(target - cur)) return [cur, target - cur]
        else map.set(nums[i], i)
    }
    
    return []
};
