/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  return Math.min.apply(null, numbers)
};

var minArray2 = function (numbers) {
  let low = 0
  let high = numbers.length - 1

  while (low < high) {
    const mid = Math.floor((high - low) / 2) + low
    if (numbers[mid] > numbers[high]) {
      low = mid + 1
    } else if (numbers[mid] < numbers[high]) {
      high = mid
    } else {
      high -= 1
    }
  }

  return numbers[low]
};
