/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const res = []

  for (let i = 0, len = prices.length - 1; i < len; i++) {
    const cur = prices[i]
    const maxV = Math.max.apply(null, prices.slice(i + 1))

    res.push(maxV - cur)
  }

  return Math.max.apply(null, res) > 0 ? Math.max.apply(null, res) : 0
};

var maxProfit2 = function (prices) {
  let maxValue = 0

  for (let i = 0, len = prices.length; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      const value = prices[j] - prices[i]
      if (value > maxValue) {
        maxValue = value
      }
    }
  }

  return maxValue
};

var maxProfit3 = function (prices) {
  let minValue = Number.MAX_SAFE_INTEGER
  let maxValue = 0

  for (let i = 0, len = prices.length; i < len; i++) {
    if (prices[i] < minValue) {
      minValue = prices[i]
    } else if (prices[i] - minValue > maxValue) {
      maxValue = prices[i] - minValue
    }
  }

  return maxValue
};
