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
var isSymmetric = function(root) {
    function symmetric(left, right) {
        if (!left && !right) return true
        if (left && !right) return false
        if (!left && right) return false
        
        const leftSymmetric = symmetric(left.left, right.right)
        const rightSymmetric = symmetric(left.right, right.left)
        
        return left.val === right.val && leftSymmetric && rightSymmetric
    }
    
    return symmetric(root.left, root.right)
};
