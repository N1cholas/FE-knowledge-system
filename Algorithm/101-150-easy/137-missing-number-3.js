/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let i = 0
    const len = nums.length
    while (i < len) {
        if (nums[i] === i + 1) {
            i++
            continue
        }
        
        const swapIndex = nums[i] - 1
        if (nums[swapIndex] === nums[i]) {
            i++
            continue
        }
        
        [nums[i], nums[swapIndex]] = [nums[swapIndex], nums[i]]
    }
    
    const ans = []
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) ans.push(i + 1)
    }
    
    return ans
};
