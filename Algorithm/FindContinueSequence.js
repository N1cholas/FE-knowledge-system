/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
    const res = []
    
    let i = 1
    let sumArray = []
    
    function getSum(array) {
        return array.reduce((p, c) => p + c, 0)
    }
    
    while (i < target) {
        for (let j = i; j < target; j++) {
            if (getSum(sumArray) < target) {
                sumArray.push(j)
            } else {
                break
            }
        }
        
        if (getSum(sumArray) === target) res.push(sumArray)
        
        sumArray = []
        
        i++
    }
    
    return res
};

console.log(findContinuousSequence(9))
