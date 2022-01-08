/**
 * @param {number[][]} intervals
 * @return {number}
 */

// dynamic program
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0]
        }
        return a[1] - b[1]
    })
    
    const dp = new Array(intervals.length).fill(1)
    
    for (let i = 1; i < intervals.length; i++) {
        for (let j = 0; j < i; j++) {
            if (intervals[i][0] >= intervals[j][1]) {
                dp[i] = Math.max(dp[i], 1 + dp[j])
            }
        }
    }
    
    return intervals.length - Math.max(...dp)
};

// greedy
var eraseOverlapIntervals2 = function(intervals) {
    intervals.sort((a, b) => {
        if (a[1] !== b[1]) {
            return a[1] - b[1]
        }
        return a[0] - b[0]
    })
    
    let ans = 1
    let pre = 0
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] >= intervals[pre][1]) {
            ans++
            pre = i;
        }
    }
    
    return intervals.length - ans
};
