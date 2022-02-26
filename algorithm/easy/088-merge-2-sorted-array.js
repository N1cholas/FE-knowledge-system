/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let p1 = 0
    let p2 = 0
    const res = []
    
    while (p1 < m && p2 < n) {
        if (nums1[p1] <= nums2[p2]) {
            res.push(nums1[p1++])
        } else {
            res.push(nums2[p2++])
        }
    }
    
    while (p1 < m) {
        res.push(nums1[p1++])
    }
    
    while (p2 < n) {
        res.push(nums2[p2++])
    }
    
    for (let i = 0; i < res.length; i++) {
        nums1[i] = res[i]
    }
};
