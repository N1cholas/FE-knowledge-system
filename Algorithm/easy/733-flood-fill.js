/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    if (image[sr][sc] === newColor) return image
    
    const color = image[sr][sc]
    const dir = [[-1, 0], [0, 1], [1, 0], [0, -1]]
    const stack = [[sr, sc]]
    
    while (stack.length) {
        const [x, y] = stack.pop()
        image[x][y] = newColor
        
        for (let i = 0; i < 4; i++) {
            const newX = x + dir[i][0]
            const newY = y + dir[i][1]
            
            if (
                newX >= 0
                && newX < image.length
                && newY >= 0
                && newY < image[0].length
                && image[newX][newY] === color
            ) {
                stack.push([newX, newY])
            }
        }
    }
    
    return image
};
