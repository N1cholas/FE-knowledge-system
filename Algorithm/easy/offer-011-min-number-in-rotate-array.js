/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    let l = 0
    let r = numbers.length - 1
    
    while (l <= r) {
        const mid = ~~((r - l) / 2) + l
        
        if (numbers[mid] < numbers[r]) {
            r = mid
        } else if (numbers[mid] > numbers[r]) {
            l = mid + 1
        } else {
            r--
        }
    }
    
    return numbers[l]
};
