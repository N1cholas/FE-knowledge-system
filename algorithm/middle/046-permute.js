/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    function tryPermute(nums, index, current, res) {
        if (current.length === nums.length) {
            return res.push(current.slice())
        }
        
        for (let i = 0; i < nums.length; i++) {
            if (!used[i]) {
                current.push(nums[i])
                used[i] = true
                tryPermute(nums, index + 1, current, res)
                current.pop()
                used[i] = false
            }
        }
    }
    
    const res = []
    
    const used = new Array(nums.length).fill(false)
    
    tryPermute(nums, 0, [], res)

    return res
};
