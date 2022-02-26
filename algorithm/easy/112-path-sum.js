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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    function pathSum(node, sum) {
        if (!node) return false
        
        if (!node.left && !node.right) return sum === node.val
        
        if (pathSum(node.left, sum - node.val)) {
            return true
        }
    
        if (pathSum(node.right, sum - node.val)) {
            return true
        }
        
        return false
    }
    
    return pathSum(root, targetSum)
};
