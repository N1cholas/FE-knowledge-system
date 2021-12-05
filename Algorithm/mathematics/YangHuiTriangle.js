/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const res = [[1], [1, 1]]
    if (numRows === 1) return [[1]]
    if (numRows === 2) return [[1], [1, 1]]

    for (let i = 2; i < numRows; i++) {
        const cur = new Array(i + 1).fill(1)

        for (let j = 1; j < cur.length - 1; j++) {
            cur[j] = res[i - 1][j] + res[i - 1][j - 1]
        }

        res.push(cur)
    }

    return res
};

console.log(generate(5))
