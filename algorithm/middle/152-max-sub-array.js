/**
 * @param {number[]} nums
 * @return {number}
 */

// source https://leetcode-cn.com/problems/maximum-product-subarray/

// 定义dp:
//   max[i] 表示[0, i]区间最大乘积
//   min[i] 表示[0, i]区间最小乘积
// 状态转移:
//   fmax(i) = max{ fmax(i - 1) * nums[i], fmin(i - 1) * nums[i], nums[i] }
//   fmin(i) = min{ fmin(i - 1) * nums[i], fmax(i - 1) * nums[i], nums[i] }
// 初始化:
//   max[i] = 1
//   min[i] = 1
// 边界:
//   max[0] = nums[0]
//   min[0] = nums[0]
var maxProduct = function(nums) {
    const n = nums.length
    
    const max = new Array(n).fill(1)
    
    max[0] = nums[0]
    
    const min = new Array(n).fill(1)
    
    min[0] = nums[0]
    
    for(let i = 1; i < n; i++) {
        const num = nums[i]
        max[i] = Math.max(max[i - 1] * num, min[i - 1] * num, num)
        min[i] = Math.min(max[i - 1] * num, min[i - 1] * num, num)
    }
    
    return Math.max(...max)
};
