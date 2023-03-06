/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// source: https://leetcode-cn.com/problems/permutations/

var permute = function(nums) {
    const res = []
    
    const used = new Array(nums.length).fill(false)
    
    tryPermute(nums, used, [], res)
    
    return res
};

const tryPermute = (nums, used, current, res) => {
    if (current.length === nums.length) {
        return res.push(current.slice())
    }
    
    for(let i = 0; i < nums.length; i++) {
        if (!used[i]) {
            used[i] = true
            current.push(nums[i])
            tryPermute(nums, used, current, res)
            used[i] = false
            current.pop()
        }
    }
}
