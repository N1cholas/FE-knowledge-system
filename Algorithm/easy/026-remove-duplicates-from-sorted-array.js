/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 0
    for (let i = 1, len = nums.length; i < len; i++) {
        if (nums[i] !== nums[k]) {
            k++
            [nums[i], nums[k]] = [nums[k], nums[i]]
        }
    }
    
    return k + 1
};
