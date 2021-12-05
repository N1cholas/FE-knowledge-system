/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        const another = target - nums[i]
        if (map.has(another)) {
            return [i, map.get(another)]
        } else {
            map.set(nums[i], i)
        }
    }
};
