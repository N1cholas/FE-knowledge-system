/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const set = new Set(nums1)
    const res = []
    
    for (let i = 0; i < nums2.length; i++) {
        const cur = nums2[i]
        if (set.has(cur) && res.indexOf(cur) === -1) res.push(cur)
    }
    
    return res
};
