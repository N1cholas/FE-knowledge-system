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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    function sum(node, isLeft) {
        if (!node) return 0
        
        const leftSum = sum(node.left, true)
        const rightSum = sum(node.right, false)
        
        return isLeft && !node.left && !node.right ? node.val + leftSum + rightSum : leftSum + rightSum
    }
    
    return sum(root, false)
};
