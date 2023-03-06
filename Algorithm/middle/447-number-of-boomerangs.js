/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    const len = points.length
    let res = 0
    
    for (let i = 0; i < len; i++) {
        const map = new Map()
        for (let j = 0; j < len; j++) {
            if (j !== i) {
                const key = dis(points, i, j)
                const value = map.get(key) || 0
                map.set(dis(points, i, j), value + 1)
            }
        }
    
        for (const value of map.values()) {
            if (value >= 2) res += value * (value - 1)
        }
    }
    
    return res
};

function dis(points, i, j) {
    return (points[i][0] - points[j][0]) ** 2 + (points[i][1] - points[j][1]) ** 2
}
