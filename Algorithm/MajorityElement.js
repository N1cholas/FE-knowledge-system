/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i]
        if (map.has(cur)) map.set(cur, map.get(cur) + 1)
        else map.set(cur, 1)
    }

    for (const [key, value] of map.entries()) {
        if (value > Math.floor(nums.length / 2)) return key
    }

    return 0
};

var majorityElement2 = function(nums) {
    const sorted =  nums.sort((a, b) => a - b)

    return sorted[Math.floor(sorted.length / 2)]
};

console.log(majorityElement([1, 2, 3, 3]))
