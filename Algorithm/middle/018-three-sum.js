/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b)
    
    const len = nums.length
    
    const res = []
    
    for (let i = 0; i < len - 2; i++) {
        const firstNum = nums[i]
        if (i > 0 && nums[i] === nums[i - 1]) continue
        
        let l = i + 1
        let r = len - 1
        
        while (l < r) {
            const sum = firstNum + nums[l] + nums[r]
            if (sum === 0) {
                res.push([firstNum, nums[l], nums[r]])
                while (l < r && nums[l] === nums[l + 1]) l++
                while (l < r && nums[r] === nums[r - 1]) r--
                l++
                r--
            } else if (sum < 0) {
                l++
            } else {
                r--
            }
        }
    }
    
    return res
};
