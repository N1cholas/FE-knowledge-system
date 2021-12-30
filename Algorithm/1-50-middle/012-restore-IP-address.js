/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    function dfs(s, index, ip, res) {
        if (index === s.length) {
            if (ip.length === 4) {
                res.push(ip.join('.'))
            }
            return
        }
        
        if (index === 0) {
            ip.push(Number(s.charAt(index)))
            dfs(s, index + 1, ip, res)
        } else {
            const lastIndex = ip.length - 1
            const next = ip[lastIndex] * 10 + Number(s.charAt(index))
            
            if (next <= 255 && ip[lastIndex] !== 0) {
                ip[lastIndex] = next
                dfs(s, index + 1, ip, res)
                ip[lastIndex] = ~~(ip[lastIndex] / 10)
            }
            if (ip.length < 4) {
                ip.push(Number(s.charAt(index)))
                dfs(s, index + 1, ip, res)
                ip.pop()
            }
        }
    }
    
    const res = []
    
    dfs(s, 0, [], res)
    
    return res
};
