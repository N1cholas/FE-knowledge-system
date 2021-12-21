/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} node
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    function sum(node, isLeft) {
        if (!node) return 0
        
        const sumOfLeaves = sum(node.left, true) + sum(node.right, false)
        
        return !node.left && !node.right && isLeft ? node.val + sumOfLeaves : sumOfLeaves
    }
    
    return sum(root, false)
};
