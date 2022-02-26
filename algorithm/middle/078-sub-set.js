/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    function trySubset(nums, index, size, current, res) {
        if (size === current.length) {
            return res.push(current.slice())
        }
        
        for (let i = index; i < nums.length; i++) {
            current.push(nums[i])
            trySubset(nums, i + 1, size, current, res)
            current.pop()
        }
    }
    
    const res = []
    
    for (let size = 0; size <= nums.length; size++) {
        trySubset(nums, 0, size, [], res)
    }
    
    return res
};
