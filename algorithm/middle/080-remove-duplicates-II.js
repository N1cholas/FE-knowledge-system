/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    function remove(nums, k) {
        let len = 0
        
        for (let i = 0; i < nums.length; i++) {
            if (len < k || nums[len - k] !== nums[i]) {
                nums[len++] = nums[i]
            }
        }
        
        return len
    }
    
    return remove(nums, 2)
};

console.log(removeDuplicates([1,1,1,2,2,2,3,3]))
