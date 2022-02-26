/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const len = nums.length
    for (const num of nums) {
        const x = (num - 1) % len
        nums[x] += len
    }
    const res = []
    for (const [ i, num ] of nums.entries()) {
        if (num <= len) {
            res.push(i + 1)
        }
    }
    
    return res
};
