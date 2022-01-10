/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let zeros = -1 // [0, zeros]
    let two = nums.length // [two, n - 1]
    
    for (let i = 0; i < two;) {
        if (nums[i] === 1) {
            i++
        } else if (nums[i] === 2) {
            two--
            [nums[i], nums[two]] = [nums[two], nums[i]]
        } else {
            zeros++
            [nums[i], nums[zeros]] = [nums[zeros], nums[i]]
            i++
        }
    }
};

console.log(sortColors([2,0,2,1,1,0]))
