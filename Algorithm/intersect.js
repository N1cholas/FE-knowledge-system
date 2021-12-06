/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const map = new Map()
    const res = []
    
    for (let i = 0; i < nums1.length; i++) {
        const cur = nums1[i]
        
        if (map.has(cur)) map.set(cur, map.get(cur) + 1)
        else map.set(cur, 1)
    }
    
    for (let j = 0; j < nums2.length; j++) {
        const cur = nums2[j]
        
        if (map.has(cur) && map.get(cur) > 0) {
            res.push(cur)
            map.set(cur, map.get(cur) - 1)
        }
    }
    
    return res
};
