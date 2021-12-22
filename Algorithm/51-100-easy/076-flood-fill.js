/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    if (image[sr][sc] === newColor) return image
    
    const queue = []
    queue.push({ y: sr, x: sc })
    
    const direction = [{ y: 1, x: 0}, { y: -1, x: 0}, { y: 0, x: 1}, { y: 0, x: -1}]
    const originalColor = image[sr][sc]
    
    while (queue.length) {
        // BFS
        const { y, x } = queue.shift()
        // DFS
        // const { y, x } = queue.pop()
        image[y][x] = newColor
        
        for (let i = 0; i < direction.length; i++) {
            const nextY = y + direction[i].y
            const nextX = x + direction[i].x
            if (
                nextY >= 0
                && nextY < image.length
                && nextX >= 0
                && nextX < image[0].length
                && image[nextY][nextX] === originalColor
            ) {
                queue.push({ y: nextY, x: nextX })
            }
        }
    }
    
    return image
};

console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]],
1,
1,
2))
