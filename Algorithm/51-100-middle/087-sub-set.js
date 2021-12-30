/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    function generateSubSet(nums, size, index, current, result) {
        if (size === 0) return result.push([])
        
        if (size === nums.length) return result.push(nums)
        
        if (current.length === size) {
            return result.push(current.slice())
        }
        
        for (let i = index; i < nums.length; i++) {
            current.push(nums[i])
            generateSubSet(nums, size, i + 1, current, result)
            current.pop()
        }
    }
    
    const res = []
    
    if (!nums.length) return res
    
    for (let i = 0; i < nums.length; i++) {
        generateSubSet(nums, i, 0, [], res)
    }
    
    return res
};

// https://leetcode-cn.com/problems/subsets/
