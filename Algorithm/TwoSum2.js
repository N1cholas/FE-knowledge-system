/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const map = new Map()
    
    for (let i = 0; i < numbers.length; i++) {
        const cur = target - numbers[i]
        
        if (map.has(cur)) {
            return [map.get(cur) + 1, i + 1]
        } else {
            map.set(numbers[i], i)
        }
    }
    
    return []
};
