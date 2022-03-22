/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// memory search
var findMaxForm = function (strs, m, n) {
    const formatStrs = strs.map(str => {
        let ones = 0
        let zeros = 0
        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i) === '1') {
                zeros++
            } else {
                ones++
            }
        }
        return [ ones, zeros ]
    })
    
    function tryFind(strs, index, m, n) {
        if (index < 0) {
            return 0
        }
        
        if (memo.has(`${index}-${m}-${n}`)) return memo.get(`${index}-${m}-${n}`)
        
        let res = tryFind(strs, index - 1, m, n)
        if (m >= strs[index][0] && n >= strs[index][1]) {
            res = Math.max(res, 1 + tryFind(strs, index - 1, m - strs[index][0], n - strs[index][1]))
        }
        
        memo.set(`${index}-${m}-${n}`, res)
        
        return res
    }
    
    const memo = new Map()
    
    return tryFind(formatStrs, formatStrs.length - 1, m, n)
};

// dynamic program
// dp定义: dp[i][j][k] 表示前i个strs最多有j个0和个1的最大子集长度
// 状态转移方程:
//                      不选择        选择        减去0         减去1
// f(i, j, k) = max{ f(i, j, k), 1 + f(i - 1, j - strs[i], k - strs[i])}
// 边界: 当i等0 都有 dp[i][j][k] = 0
var findMaxForm2 = function(strs, m, n) {
    const strings = strs.map(
        str => [
            str.split('').filter(s => s === '0').length,
            str.split('').filter(s => s === '1').length
        ]
    )
    
    const len = strs.length
    
    const dp = new Array(len + 1).fill(0).map(
        _ => new Array(m + 1).fill(0).map(
            _ => new Array(n + 1).fill(0)
        )
    )
    
    for (let i = 1; i <= len; i++) {
        const [zeros, ones] = strings[i - 1]
        for(let j = 0; j <= m; j++) {
            for(let k = 0; k <= n; k++) {
                dp[i][j][k] = dp[i - 1][j][k]
                if (j >= zeros && k >= ones) {
                    dp[i][j][k] = Math.max(dp[i][j][k], 1 + dp[i - 1][j - zeros][k - ones])
                }
            }
        }
    }
    
    return dp[len][m][n]
};
