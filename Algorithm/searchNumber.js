/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    let targetIndex = null
    let res = 0
    
    while (left <= right) {
        const mid = Math.floor((right - left) / 2) + left
        
        if (nums[mid] < target) {
            left = mid + 1
        } else if (nums[mid] > target) {
            right = mid - 1
        } else {
            targetIndex = mid
            res++
            break
        }
    }
    
    for (let i = targetIndex + 1; i < nums.length; i++) {
        if (nums[i] === target) res++
        else break
    }
    
    for (let i = targetIndex - 1; i >= 0; i--) {
        if (nums[i] === target) res++
        else break
    }
    
    return res
};
