/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let l = 0
    let r = -1
    let sum = 0
    const len = nums.length
    let ans = len + 1
    
    while (l < len) {
        if (sum < target && r + 1 < len) {
            r++
            sum += nums[r]
        } else {
            sum -= nums[l]
            l++
        }
        
        if (sum >= target) {
            ans = Math.min(ans, (r - l + 1))
        }
    }
    
    if (ans === len + 1) {
        return 0
    }
    
    return ans
};
