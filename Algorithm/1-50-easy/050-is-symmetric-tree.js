/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) return true
    
    return symmetric(root.left, root.right)
};

function symmetric(left, right) {
    if (!left && !right) return true
    if (left && !right) return false
    if (!left && right) return false
    
    const leftSymmetric = symmetric(left.left, right.right)
    const rightSymmetric = symmetric(left.right, right.left)
    
    return left.val === right.val && leftSymmetric && rightSymmetric
}
