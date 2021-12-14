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
    
    while(p1 < m && p2 < n) {
        if (nums1[p1] <= nums2[p2]) {
            res.push(nums1[p1])
            p1++
        } else if (nums1[p1] > nums2[p2]) {
            res.push(nums2[p2])
            p2++
        }
    }
    
    if (p1 < m) {
        for(let i = p1; i < m; i++) {
            res.push(nums1[i])
        }
    } else {
        for(let i = p2; i < n; i++) {
            res.push(nums2[i])
        }
    }
    
    for (let i = 0; i < res.length; i++) {
        nums1[i] = res[i]
    }
};
