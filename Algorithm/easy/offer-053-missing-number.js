/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let l = 0
    let r = nums.length - 1
    
    while (l <= r) {
        const mid = ~~((r - l) / 2) + l
        
        if (mid === nums[mid]) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    
    return l
};
