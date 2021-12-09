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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const res = []
    
    if (!root) return res
    
    if (!root.left && !root.right) {
        res.push(root.val + '')
        return res
    }
    
    const leftPaths = binaryTreePaths(root.left)
    
    for (let i = 0; i < leftPaths.length; i++) {
        res.push(`${root.val}->${leftPaths[i]}`)
    }
    
    const rightPaths = binaryTreePaths(root.right)
    
    for (let i = 0; i < rightPaths.length; i++) {
        res.push(`${root.val}->${rightPaths[i]}`)
    }
    
    return res
};
