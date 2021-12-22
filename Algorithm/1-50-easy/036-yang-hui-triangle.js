/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const res = [[1]]
    let curRow = []
    
    for (let i = 1; i < numRows; i++) {
        for (let j = 0; j <= i; j++) {
            if (j === 0) curRow.push(1)
            else if (j === i) curRow.push(1)
            else {
                curRow.push(res[i - 1][j - 1] + res[i - 1][j])
            }
        }
        res.push(curRow)
        curRow = []
    }
    
    return res
};

console.log(generate(5))
