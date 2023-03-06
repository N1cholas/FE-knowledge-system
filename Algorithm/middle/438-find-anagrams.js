/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const pArr = new Array(26).fill(0)
    for (let i = 0; i < p.length; i++) {
        pArr[p.charCodeAt(i) - 'a'.charCodeAt(0)]++
    }
    
    const arr = new Array(26).fill(0)
    let l = 0
    let r = -1
    const len = s.length
    const res = []
    
    while (r + 1 < len) {
        r++
        arr[s.charCodeAt(r) - 'a'.charCodeAt(0)]++
        
        if (r - l + 1 > p.length) {
            arr[s.charCodeAt(l) - 'a'.charCodeAt(0)]--
            l++
        }
        
        if (r - l + 1 === p.length && same(arr, pArr)) {
            res.push(l)
        }
    }
    
    return  res
};

function same(a1, a2) {
    for (let i = 0; i < 26; i++) {
        if (a1[i] !== a2[i]) return false
    }
    return true
}
