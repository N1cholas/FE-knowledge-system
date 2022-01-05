/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    function tryRestore(s, index, current, res) {
        if (index >= s.length) {
            if (current.length === 4) {
                res.push(current.join('.'))
            }
            return
        }
        
        if (index === 0) {
            current.push(Number(s.charAt(index)))
            tryRestore(s, index + 1, current, res)
        } else {
            const lastIndex = current.length - 1
            const next = current[lastIndex] * 10 + Number(s.charAt(index))
            
            if (next <= 255 && current[lastIndex] !== 0) {
                current[lastIndex] = next
                tryRestore(s, index + 1, current, res)
                current[lastIndex] = ~~(current[lastIndex] / 10)
            }
        
            if (current.length < 4) {
                current.push(Number(s.charAt(index)))
                tryRestore(s, index + 1, current, res)
                current.pop()
            }
        }
    }
    
    const res = []
    
    tryRestore(s, 0, [], res)
    
    return res
};
