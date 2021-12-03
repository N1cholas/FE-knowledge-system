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

    const check = (leftTree, rightTree) => {
        if (!leftTree && !rightTree) return true
        if (leftTree && !rightTree) return false
        if (!leftTree && rightTree) return false

        return leftTree.val === rightTree.val && check(leftTree.right, rightTree.left) && check(leftTree.left, rightTree.right)
    }

    return check(root, root)
};
