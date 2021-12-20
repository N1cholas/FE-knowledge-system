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
    function symmetricTree(left, right) {
        if (!left && !right) return true
        if (!left && right) return false
        if (left && !right) return false
        
        const leftSymmetricTree = symmetricTree(left.left, right.right)
        const rightSymmetricTree = symmetricTree(left.right, right.left)
        
        return leftSymmetricTree && rightSymmetricTree && left.val === right.val
    }
    
    return symmetricTree(root.left, root.right)
};
