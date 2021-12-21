/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    return Math.max(
        ~~(candyType / 2),
        new Set(candyType).size
    )
};
