/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// f(n1, n2, m, n) 获取n1上[0...m]和n2上[0...n] 最多不相交的线数量

// memory search
var maxUncrossedLines = function(nums1, nums2) {
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

// dynamic program
// 定义dp: dp[i][j] 表示前i个nums1和前j个nums2的最长公共子序列
// 状态转移:
// f(i, j) = 1 + f(i - 1, j - 1) & nums[i - 1] === nums[j - 1]
// f(i, j) = max{ f(i - 1, j), f(i, j - 1) } & nums[i - 1] !== nums[j - 1]
// 边界: dp[0][0] = 0
var maxUncrossedLines2 = function(nums1, nums2) {
    const n = nums1.length
    const m = nums2.length
    
    const dp = new Array(n + 1).fill(0).map(_ => new Array(m + 1).fill(0))
    
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= m; j++) {
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1]
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    
    return dp[n][m]
};
