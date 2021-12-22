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
    
    let res = 0
    
    for(let i = 0; i < s.length; i++) {
        if (
            map.get(s.charAt(i)) < map.get(s.charAt(i + 1))
            && s.charAt(i + 1)
        ) {
            res -= map.get(s.charAt(i))
        } else {
            res += map.get(s.charAt(i))
        }
    }
    
    return res
};
