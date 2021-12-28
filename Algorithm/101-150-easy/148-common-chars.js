/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    const m1 = new Array(26).fill(0)
    let m2 = []
    const ans = []
    const firstWord = words[0]
    
    for (let i = 0; i < firstWord.length; i++) {
        const curStr = firstWord.charAt(i)
        m1[curStr.charCodeAt() - 'a'.charCodeAt()]++
    }
    
    for (let i = 1; i < words.length; i++) {
        m2 = new Array(26).fill(0)
        const cur = words[i]
        
        for (let j = 0; j < cur.length; j++) {
            const curStr = cur.charAt(j)
    
            m2[curStr.charCodeAt() - 'a'.charCodeAt()]++
        }
        
        for (let k = 0; k < m1.length; k++) {
            m1[k] = Math.min(m1[k], m2[k])
        }
    }
    
    for (let i = 0; i < m1.length; i++) {
        while (m1[i]--) {
            ans.push(String.fromCharCode(i + 'a'.charCodeAt()))
        }
    }
    
    return ans
};

console.log(commonChars(
    ["bella","label","roller"]))
