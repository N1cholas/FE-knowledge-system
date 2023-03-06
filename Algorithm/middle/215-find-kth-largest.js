/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    function swap(i, j) {
        const temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }
    
    function partition(nums, l, r) {
        const randomIndex = Math.floor(Math.random() * (r - l + 1) + l)
        swap(l, randomIndex)
        
        const v = nums[l]
        let j = l
        
        for (let i = l + 1; i < nums.length; i++) {
            if (nums[i] < v) {
                swap(i, j + 1)
                j++
            }
        }
        
        swap(l, j)
        
        return j
    }
    
    const targetIndex = nums.length - k
    let l = 0
    let r = nums.length - 1
    
    while (1) {
        const index = partition(nums, l, r)
        
        if (index === targetIndex) {
            return nums[index]
        } else if (index < targetIndex) {
            l = index + 1
        } else {
            r = index - 1
        }
    }
};
