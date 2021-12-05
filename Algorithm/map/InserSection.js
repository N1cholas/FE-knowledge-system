/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const map = new Map()
    const res = []
    
    for (let i = 0, len = nums1.length; i < len; i++) {
        const cur = nums1[i]
        
        if (!map.has(cur)) map.set(cur, i)
    }
    
    for (let j = 0, len = nums2.length; j < len; j++) {
        const cur = nums2[j]
        
        if (map.has(cur) && res.indexOf(cur) === -1) res.push(cur)
    }
    
    return res
};
