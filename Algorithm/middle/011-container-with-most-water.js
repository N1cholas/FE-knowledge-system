/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0
    let r = height.length - 1
    let mostWater = 0
    
    while (l < r) {
        mostWater = Math.max(
            mostWater,
            (r - l) * Math.min(height[l], height[r])
        )
        if (height[l] < height[r]) {
            l++
        } else {
            r--
        }
    }
    
    return mostWater
};
