/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    function merge(node1, node2) {
        if (!node1 && !node2) return null
        if (node1 && !node2) return node1
        if (!node1 && node2) return node2
        
        node1.val = node1.val + node2.val
        
        node1.left = merge(node1.left, node2.left)
        node1.right = merge(node1.right, node2.right)
        
        return node1
    }
    
    return merge(root1, root2)
};
