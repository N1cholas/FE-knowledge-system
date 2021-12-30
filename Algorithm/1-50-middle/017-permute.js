/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    function generatePermute(nums, index, p, res) {
        if (index === nums.length) {
            return res.push(p.slice())
        }
        
        for (let i = 0; i < nums.length; i++) {
            if (!used[i]) {
                p.push(nums[i])
                used[i] = true
                generatePermute(nums, index + 1, p, res)
                p.pop()
                used[i] = false
            }
        }
    }
    
    const res = []
    
    if (!nums.length) return res
    
    const used = new Array(nums.length).fill(false)
    
    generatePermute(nums, 0, [], res)
    
    return res
};

console.log(permute([1, 2, 3]))

// https://leetcode-cn.com/problems/permutations/
