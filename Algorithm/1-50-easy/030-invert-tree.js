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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    function invert(node) {
        if (!node) return null
        
        const temp = node.right
        node.right = node.left
        node.left = temp
        
        invert(node.left)
        invert(node.right)
        
        return node
    }
    
    return invert(root)
};
