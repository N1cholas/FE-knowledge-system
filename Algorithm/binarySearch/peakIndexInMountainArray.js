/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let left = 0
    let right = arr.length - 1
    
    while (left <= right) {
        const mid = Math.floor((right - left) / 2) + left
        
        if (arr[mid] < arr[mid + 1]) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    
    return left
};
