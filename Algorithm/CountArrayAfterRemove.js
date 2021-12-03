/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let left = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            swap(nums, left, i)
            left++
        }
    }

    function swap(nums, i, j) {
        const temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }

    return left
};

console.log(removeElement([3,2,2,3], 3))
