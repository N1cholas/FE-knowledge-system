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
    function traversal(root, array) {
        if (!root) return []
        
        traversal(root.left, array)
        array.push(root.val)
        traversal(root.right, array)
    }
    const res = []
    traversal(root, res)
    return res
};
