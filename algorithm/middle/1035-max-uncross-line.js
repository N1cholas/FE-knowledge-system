/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// source: https://leetcode-cn.com/problems/uncrossed-lines/

// dynamic program
// 定义dp: dp[i][j] 表示前i个数和前j个数的最大连线数
// 状态转移:
//   nums1[i] === nums2[j] & f(i, j) = 1 + f(i - 1, j - 1)
//   nums1[i] !== nums2[j] & f(i, j) = max{ f(i - 1, j), f(i, j - 1) }
// 初始化: dp[i][j] = 0
// 边界: dp[0][0] = 0
var maxUncrossedLines = function(nums1, nums2) {
    const n1 = nums1.length
    const n2 = nums2.length
    
    const dp = new Array(n1 + 1).fill(0).map(_ => new Array(n2 + 1).fill(0))
    
    for(let i = 1; i <= n1; i++) {
        for(let j = 1; j <= n2; j++) {
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1]
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    
    return dp[n1][n2]
};

// memory search
var maxUncrossedLines2 = function(nums1, nums2) {
    function tryGetMax(n1, n2, m, n) {
        if (m < 0 || n < 0) {
            return 0
        }
    
        if (memo.has(`${m}-${n}`)) return memo.get(`${m}-${n}`)
        
        let res = 0
        if (n1[m] === n2[n]) {
            res = 1 + tryGetMax(n1, n2, m - 1, n - 1)
        } else {
            res = Math.max(
                tryGetMax(n1, n2, m - 1, n),
                tryGetMax(n1, n2, m, n - 1)
            )
        }
    
        memo.set(`${m}-${n}`, res)
        
        return res
    }
    
    const memo = new Map()
    
    return tryGetMax(nums1, nums2, nums1.length - 1, nums2.length - 1)
};
