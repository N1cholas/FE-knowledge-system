/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = new Map([
            ['I' ,1],
            ['V' ,5],
            ['X' ,10],
            ['L' ,50],
            ['C' ,100],
            ['D' ,500],
            ['M' ,1000]
        ]
    )
    
    const formatS = s.split('').map(str => map.get(str))
    let res = 0
    
    for (let i = 0, len = s.length; i < len; i++) {
        if (formatS[i] < formatS[i + 1] && formatS[i + 1]) {
            res -= formatS[i]
        } else {
            res += formatS[i]
        }
    }
    
    return res
};
