/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let times = 0
    
    for (let i = 0; i < timeSeries.length; i++) {
        if (timeSeries[i + 1] - timeSeries[i] >= duration) {
            times += duration
        } else if (timeSeries[i + 1] - timeSeries[i] < duration) {
            times += timeSeries[i + 1] - timeSeries[i]
        } else if (!timeSeries[i + 1]) {
            times += duration
        }
    }
    
    return times
};
