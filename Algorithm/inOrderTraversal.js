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
var inorderTraversal = function(root) {
    const res = []
    
    function traversal(node, res) {
        if (!node) return []
        
        traversal(node.left, res)
        res.push(node.val)
        traversal(node.right, res)
    }
    
    traversal(root, res)
    
    return res
};
