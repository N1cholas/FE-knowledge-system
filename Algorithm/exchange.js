/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    let left = 0
    let right = 0
    
    while (right < nums.length) {
        if (nums[right] % 2 === 1) {
            swap(nums, left, right)
            left++
        }
        right++
    }
    
    function swap(a, i, j) {
        const temp = a[i]
        a[i] = a[j]
        a[j] = temp
    }
    
    return nums
};
