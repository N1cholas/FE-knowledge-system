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
    
    while (p1 < m || p2 < n) {
        const p1Value = nums1[p1]
        const p2Value = nums2[p2]
        
        if (p2 === n) {
            res.push(p1Value)
            p1++
        } else if (p1 === m) {
            res.push(p2Value)
            p2++
        } else if (p1Value <= p2Value) {
            res.push(p1Value)
            p1++
        } else if (p1Value > p2Value) {
            res.push(p2Value)
            p2++
        }
    }
    
    for (let i = 0, len = res.length; i < len; i++) {
        nums1[i] = res[i]
    }
};
