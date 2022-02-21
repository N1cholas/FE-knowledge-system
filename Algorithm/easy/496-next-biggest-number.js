/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const stack = []
    const map = new Map()
    
    for (let i = nums2.length - 1; i >= 0; i--) {
        const num = nums2[i]
        
        while (stack.length && num > stack[stack.length - 1]) {
            stack.pop()
        }
        
        map.set(num, stack.length ? stack[stack.length - 1] : -1)
        
        stack.push(num)
    }
    
    return nums1.map(num => map.get(num))
};
