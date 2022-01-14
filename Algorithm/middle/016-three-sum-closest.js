/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b)
    const len = nums.length
    let res = nums[0] + nums[1] + nums[2]
    for (let i = 0; i < len; i++) {
        const num = nums[i]
        
        let l = i + 1
        let r = len - 1
        while (l < r) {
            const sum = num + nums[l] + nums[r]
            
            if (Math.abs(target - sum) < Math.abs(target - res)) {
                res = sum
            }
     
            if (sum === target) {
                return target
            } else if (sum < target) {
                l++
            } else {
                r--
            }
        }
    }
    
    return res
};
