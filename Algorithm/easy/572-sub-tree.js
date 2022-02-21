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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    function sameTree(tree1, tree2) {
        if (!tree1 && !tree2) return true
        if (tree1 && !tree2) return false
        if (!tree1 && tree2) return false
        
        const sameLeft = sameTree(tree1.left, tree2.left)
        const sameRight = sameTree(tree1.right, tree2.right)
        
        return tree1.val === tree2.val && sameLeft && sameRight
    }
    
    function subTree(root, subRoot) {
        if (!root) return false
        
        return sameTree(root, subRoot) || subTree(root.left, subRoot) || subTree(root.right, subRoot)
    }
    
    return subTree(root, subRoot)
};
