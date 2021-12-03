/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function(n, m) {
    const res = []

    for (let i = 0; i < n; i++) res.push(i)

    let removeIndex = 0

    while (res.length !== 1) {
        removeIndex = ((m - 1) + removeIndex) % res.length

        res.splice(removeIndex, 1)
    }

    return res[0]
};

console.log(lastRemaining(5, 3))
