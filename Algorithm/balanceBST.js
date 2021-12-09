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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (!root) return true
    
    const leftDepth = depth(root.left)
    const rightDepth = depth(root.right)
    
    return Math.abs(leftDepth - rightDepth) <= 1 && isBalanced(root.left) && isBalanced(root.right)
};

function depth(root) {
    if (!root) return 0
    
    const leftDepth = depth(root.left)
    const rightDepth = depth(root.right)
    
    return Math.max(leftDepth, rightDepth) + 1
}
