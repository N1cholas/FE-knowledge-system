/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (t.length > s.length) return ''
    
    const tArr = new Array(256).fill(0)
    const sArr = new Array(256).fill(0)
    
    for (let i = 0; i < t.length; i++) {
        tArr[t.charCodeAt(i)]++
    }
    
    let l = 0
    let r = -1
    let minLen = Infinity
    let res = ''
    
    while (r + 1 < s.length) {
        if (!contain(sArr, tArr)) {
            sArr[s.charCodeAt(r + 1)]++
            r++
        } else {
            if (r - l + 1 < minLen) {
                minLen = r - l + 1
                res = s.slice(l, r + 1)
            }

            sArr[s.charCodeAt(l)]--
            l++
        }
    }
    
    while (contain(sArr, tArr)) {
        if (r - l + 1 < minLen) {
            minLen = r - l + 1
            res = s.slice(l, r + 1)
        }
    
        sArr[s.charCodeAt(l)]--
        l++
    }
    
    return res
};

function contain(a, b) {
    for (let i = 0; i < b.length; i++) {
        if (a[i] < b[i]) return false
    }
    
    return true
}

console.log(minWindow(
    "ADOBECODEBANC",
"ABC"))
