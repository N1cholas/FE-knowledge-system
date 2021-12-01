/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  const a1 = nums1.slice(0, m)
  const a2 = nums2.slice(0, n)

  const res = a1.concat(a2).sort((a, b) => a < b ? -1 : 1)

  for (let i = 0, len = m + n; i < len; i++) {
    nums1[i] = res[i]
  }
};

var merge2 = function (nums1, m, nums2, n) {
  let p1 = 0
  let p2 = 0
  const res = []
  let cur = null

  while (p1 < m || p2 < n) {
    if (p1 === m) {
      cur = nums2[p2++]
    } else if (p2 === n) {
      cur = nums1[p1++]
    } else if (nums1[p1] < nums2[p2]) {
      cur = nums1[p1++]
    } else if (nums1[p1] > nums2[p2]) {
      cur = nums2[p2++]
    } else {
      cur = nums1[p1++]
    }

    res.push(cur)
  }

  for (let i = 0, len = m + n; i < len; i++) {
    nums1[i] = res[i]
  }
};

var merge3 = function (nums1, m, nums2, n) {
  let p1 = m - 1
  let p2 = n - 1
  let tail = m + n - 1
  let cur

  while (p1 >= 0 || p2 >= 0) {
    if (p1 === -1) {
      cur = nums2[p2--]
    } else if (p2 === -1) {
      cur = nums1[p1--]
    } else if (nums1[p1] > nums2[p2]) {
      cur = nums1[p1--]
    } else if (nums1[p1] < nums2[p2]) {
      cur = nums2[p2--]
    } else {
      cur = nums1[p1--]
    }

    nums1[tail--] = cur
  }

}

console.log(merge2([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
