/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
    const res = []
    let left = 1
    let right = 2
    
    while (left < right) {
        const sum = ~~((left + right) * (right - left + 1) / 2)
        
        if (sum === target) {
            const temp = []
            for (let i = left; i <= right; i++) {
                temp.push(i)
            }
            res.push(temp)
            left++
        } else if (sum < target) {
            right++
        } else {
            left++
        }
    }
    
    return res
};
