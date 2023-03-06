/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    const map = new Map()
    let counts = 0
    
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            const key = nums1[i] + nums2[j]
            const value = map.get(key) || 0
            map.set(key, value + 1)
        }
    }
    
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (map.has(0 - nums3[i] - nums4[j])) {
                counts += map.get(0 - nums3[i] - nums4[j])
            }
        }
    }
    
    return counts
};
