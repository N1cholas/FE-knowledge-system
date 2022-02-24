/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

// greed
// 贪心：跳格子，保证了前一格一定是空地，所以只需要判断当前和下一格
var canPlaceFlowers = function(flowerbed, n) {
    for(let i = 0, len = flowerbed.length; i < len && n > 0;) {
        // 遇到花就跳两格
        if (flowerbed[i]) {
            i += 2
        } else
        // 当前是空地并且前一格一定是空地
            // 当前是末尾，可以种植，跳两格
            // 当前的下一块地是空地，可以种植，跳两格
        if (i === len - 1 || flowerbed[i + 1] === 0) {
            n--
            i += 2
        // 当前是空地并且下一格是花，跳三格(相当于遇到花跳两格，只不过是下一块地，所以跳三格)
        } else {
            i += 3
        }
    }
    
    return n === 0
};
