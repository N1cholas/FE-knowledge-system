/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    let targetIndex
    let count = 0
    
    while (left <= right) {
        const mid = ~~((right - left) / 2) + left
        
        if (nums[mid] < target) {
            left = mid + 1
        } else if (nums[mid] > target) {
            right = mid - 1
        } else {
            targetIndex = mid
            count++
            break
        }
    }
    
    for (let i = targetIndex + 1; i < nums.length; i++) {
        if (nums[i] === target) count++
        else break
    }
    
    for (let j = targetIndex - 1; j >= 0; j--) {
        if (nums[j] === target) count++
        else break
    }
    
    return count
};
