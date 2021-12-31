/**
 * @param {number[][]} triangle
 * @return {number}
 */

// memory search
var minimumTotal = function(triangle) {
    const dp = []
    
    for (let i = 0; i < triangle.length; i++) {
        const cur = []
        for(let j = 0; j < triangle.length; j++) {
            cur.push(-1)
        }
        dp.push(cur)
    }
    
    function sum(triangle, i, j, dp) {
        if (dp[i][j] !== -1) {
            return dp[i][j]
        }
        
        if (i === 0) {
            return dp[i][j] = triangle[i][j]
        }
        
        if (j === 0) {
            return dp[i][j] = triangle[i][j] + sum(triangle, i - 1, j, dp)
        }
        
        if (j === i) {
            return dp[i][j] = triangle[i][j] + sum(triangle, i - 1, j - 1, dp)
        }
        
        return dp[i][j] = triangle[i][j] + Math.min(sum(triangle, i - 1, j, dp), sum(triangle, i - 1, j - 1, dp))
    }
    
    for (let i = 0; i < triangle.length; i++) {
        sum(triangle, triangle.length - 1, i, dp)
    }

    return Math.min(...dp[dp.length - 1])
};

/**
 * @param {number[][]} triangle
 * @return {number}
 */

// dynamic program
var minimumTotal2 = function(triangle) {
    const n = triangle.length
    
    for (let i = 1; i < n; i++) {
        triangle[i][0] += triangle[i - 1][0]
        triangle[i][i] += triangle[i - 1][i - 1]
        
        for (let j = 1; j < i; i++) {
            triangle[i][j] += Math.min(triangle[i - 1][j - 1], triangle[i - 1][j])
        }
    }
    
    return Math.min(...triangle[triangle.length - 1])
};
