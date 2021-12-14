/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    let left = 0
    let right = numbers.length - 1
    
    while(left <= right) {
        const mid = ~~((right - left) / 2) + left
        
        if (numbers[mid] < numbers[right]) {
            right = mid
        } else if (numbers[mid] > numbers[right]) {
            left = mid + 1
        } else {
            right--
        }
    }
    
    return numbers[left]
};
