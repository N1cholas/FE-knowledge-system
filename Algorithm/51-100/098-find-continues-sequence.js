/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
    let left = 1
    let right = 2
    const res = []
    
    while (left < right) {
        const sum = ~~((left + right) * (right - left + 1) / 2)
        
        if (sum === target) {
            const cur = []
            for (let i = left; i <= right; i++) {
                cur.push(i)
            }
            res.push(cur)
            left++
        } else if (sum < target) {
            right++
        } else {
            left++
        }
    }
    
    return res
};

console.log(findContinuousSequence(9))
