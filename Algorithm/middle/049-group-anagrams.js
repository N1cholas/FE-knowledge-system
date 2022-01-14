/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map()
    
    for (const str of strs) {
        const arr = Array.from(str)
        arr.sort()
        const key = arr.toString()
        const list = map.get(key) || []
        list.push(str)
        map.set(key, list)
    }
    
    return Array.from(map.values())
};
