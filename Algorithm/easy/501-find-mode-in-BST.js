/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
    function traversal(node) {
        if (!node) return
        
        traversal(node.left)
        update(node.val)
        traversal(node.right)
    }
    
    function update(v) {
        if (v !== cur) {
            cur = v
            count = 1
        } else {
            count++
        }
        
        if (count === maxCount) {
            ans.push(cur)
        }
        if (count > maxCount) {
            maxCount = count
            ans = [cur]
        }
    }
    
    let ans = []
    let cur = -1
    let count = 0
    let maxCount = 0
    
    traversal(root)
    
    return ans
};
