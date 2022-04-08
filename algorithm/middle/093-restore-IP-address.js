/**
 * @param {string} s
 * @return {string[]}
 */

// source: https://leetcode-cn.com/problems/restore-ip-addresses/

var restoreIpAddresses = function(s) {
    const res = []
    
    tryRestoreIp(s, 0, [], res)
    
    return res
};

const tryRestoreIp = (s, index, current, res) => {
    if (index >= s.length) {
        if (current.length === 4) {
            res.push(current.slice().join('.'))
        }
        
        return
    }
    
    if (index === 0) {
        current.push(Number(s.charAt(index)))
        tryRestoreIp(s, index + 1, current, res)
    } else {
        const last = current[current.length - 1]
        const next = last * 10 + Number(s.charAt(index))
        
        if (next <= 255 && last !== 0) {
            current[current.length - 1] = next
            tryRestoreIp(s, index + 1, current, res)
            current[current.length - 1] = ~~(next / 10)
        }
        
        if (current.length < 4) {
            current.push(Number(s.charAt(index)))
            tryRestoreIp(s, index + 1, current, res)
            current.pop()
        }
    }
}
