/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let res = 0
    const min = Math.pow(-2, 31)
    const max = Math.pow(2, 31) - 1

    while (x) {
        res = res * 10 + x % 10

        if (res < min || res > max) return 0

        x = ~~(x / 10)
    }

    return res
};
