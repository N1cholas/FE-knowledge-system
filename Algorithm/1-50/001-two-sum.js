/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map()
    
    for(let i = 0; i < nums.length; i++) {
        const currentNumber = nums[i]
        if (map.has(target - currentNumber)) {
            return [i, map.get(target - currentNumber)]
        } else {
            map.set(currentNumber, i)
        }
    }
    
    return []
};
