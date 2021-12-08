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
    let res = []
    
    function postorderTraversal(root, res) {
        if (!root) return
        
        postorderTraversal(root.left, res)
        postorderTraversal(root.right, res)
        res.push(root.val)
    }
    
    postorderTraversal(root, res)
    
    return res
};
