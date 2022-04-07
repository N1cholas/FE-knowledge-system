/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// source: https://leetcode-cn.com/problems/subsets/

var subsets = function(nums) {
    const res = []
    
    for(let size = 0; size <= nums.length; size++) {
        tryGenerateSubsets(nums, 0, [], res, size)
    }
    
    return res
};

const tryGenerateSubsets = (nums, index, current, res, size) => {
    if (size === current.length) {
        return res.push(current.slice())
    }
    
    for(let i = index; i < nums.length; i++) {
        current.push(nums[i])
        tryGenerateSubsets(nums, i + 1, current, res, size)
        current.pop()
    }
}
