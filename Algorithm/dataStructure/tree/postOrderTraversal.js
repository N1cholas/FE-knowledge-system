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
var postorderTraversal = function(root) {
    function postOrder(root, res) {
        if (!root) return []
        
        postOrder(root.left, res)
        postOrder(root.right, res)
        res.push(root.val)
    }
    
    const res = []
    
    postOrder(root, res)
    
    return res
};
